import { Users, UserAddresses } from '../database/models';
import ApiError from '../utils/ApiError';
const bcrypt = require ('bcrypt');

export async function queryUsers() {

    const users = await Users.findAll({ where: { active: true } });

    if(users.length <= 0) {
        throw new ApiError(404, 'No users found');
    }
    return users;
};

export async function getUserByEmail(email) {

    const user = await Users.findOne({
        where: { 
            email: email,
            active: true
        },
        include: {model: UserAddresses}
    });

    if(!user) {
        throw new ApiError(404, 'User not found');
    }
    return user;
}

export async function createUser(userData) {

    if(await Users.findOne({ where: { email: userData.email } })) {
        throw new ApiError(409, 'User already exists');
    }  

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    userData.password = hashedPassword;
    userData.createdAt = Date.now();
    userData.updatedAt = Date.now();

    return await Users.create(userData);
}

export async function deleteUserByID (userId) {

    if(!await Users.findOne({ 
        where: { 
            id: userId,
            active: true 
        } 
    })) {
        throw new ApiError(404, 'User not found');
    }

    return await Users.update({ active: false }, { where: { id: userId } });
}

export async function updateUser (userData) {

    let findData = await Users.findOne({ 
        where: 
        { 
            id: userData.id,
            active: true 
        } 
    });
    if(!findData) {
        throw new ApiError(404, 'User not found');
    }

    userData.updatedAt = Date.now();

    return await Users.update(userData, { where: { id: userData.id }});
}