import { Users, UserAddresses, UserRoles } from '../database/models'
import ApiError from '../utils/ApiError'
import bcrypt from 'bcrypt'
import { usePasswordHashToMakeToken } from '../utils/issueJWT'
import jsonwebtoken from 'jsonwebtoken'
import sendEmail from '../utils/email/sendEmail'
const clientURL = process.env.CLIENT_URL

export async function queryUsers() {
  const users = await Users.findAll({ where: { active: true } })
  if (users.length <= 0) {
    throw new ApiError(404, 'No users found')
  }

  return users
}

export async function getUserByEmail(email) {
  const user = await Users.findOne({
    where: {
      email: email,
      active: true,
    },
    include: UserRoles
  })

  return user
}

export async function getUserByID(id) {
  const user = await Users.findOne({
    where: {
      id: id,
      active: true,
    },
    include: [
      {
        model: UserRoles
      },
      {
        model: UserAddresses
      }
    ]
  })
  if (!user) {
    throw new ApiError(404, 'User not found')
  }
  
  return user
}

export async function deleteUserByID(userId) {
  if (!(await Users.findOne({ where: { id: userId, active: true } }))) {
    throw new ApiError(404, 'User not found')
  }

  return await Users.update({ active: false }, { where: { id: userId } })
}

export async function updateUser(userData) {
  let findUser = await Users.findOne({
    where: { id: userData.id, active: true },
  })
  if (!findUser) {
    throw new ApiError(404, 'User not found')
  }
  
  if (userData.password) {
    if(await bcrypt.compare(userData.password, findUser.password)) {
      throw new ApiError(400, 'Your new password cannot be the same as your old password');
    } else {
      const hashedPassword = await bcrypt.hash(userData.password, 10)
      userData.password = hashedPassword
    }
  }
  
  return await Users.update(userData, { where: { id: userData.id } })
}

export async function createUser(userData) {
  if (await Users.findOne({ where: { email: userData.email } })) {
    throw new ApiError(409, 'User already exists')
  }
  const hashedPassword = await bcrypt.hash(userData.password, 10)
  userData.password = hashedPassword
  userData.active = true
  const user = await Users.create(userData)
  await UserRoles.create({roleId: 3, userId: user.id});
  return user;
}

export async function requestResetPassword(email) {
  const user = await getUserByEmail(email)
  if (user) {
    const token = usePasswordHashToMakeToken(user)
    const url = `${clientURL}/password/usetoken/${user.id}/${token}`
    console.log(url)
    sendEmail(
      user.email,
      'Password Reset Request',
      {
        name: user.firstName + ' ' + user.lastName,
        url: url,
      },
      './template/requestResetPassword.handlebars'
    )
  } else {
    return;
  }
}

export async function resetPassword(userId, token, password, confirmPassword) {
  const user = await getUserByID(userId);
  const secret = user.password + '-' + user.createdAt;
  const payload = jsonwebtoken.verify(token, secret);
  if(!payload) {
    throw new ApiError(400, "Invalid request");
  }
  if(payload.id !== user.id) {
    throw new ApiError(400, "Invalid user request");
  }
  if(await bcrypt.compare(password, user.password)) {
    throw new ApiError(400, "Your new password cannot be the same as your old password");
  }
  const passwordHash = await bcrypt.hash(password, 10);
  await Users.update({ password: passwordHash }, { where: { id: user.id } })
  sendEmail(
    user.email,
    "Password Reset Successfully",
    {
      name: user.name,
    },
    "./template/resetPassword.handlebars"
  );

  return;
}