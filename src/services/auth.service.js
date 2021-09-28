import { userService } from '../services'
import bcrypt from 'bcrypt'
import { issueJWT } from '../utils/issueJWT'
import ApiError from '../utils/ApiError'

export async function login(email, password) {
  const user = await userService.getUserByEmail(email)
  if (!user) {
    throw new ApiError(404, 'The email or password you entered is incorrect')
  }
  if (await bcrypt.compare(password, user.password)) {
    const tokenObject = issueJWT(user)
    return tokenObject.token
  } else {
    throw new ApiError(401, 'The email or password you entered is incorrect')
  }
}
