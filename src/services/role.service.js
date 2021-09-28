import { Roles } from '../database/models'
import ApiError from '../utils/ApiError'

export async function getUserRole(roleId) {
    const role = await Roles.findByPk(roleId);
    if(!role) {
      throw new ApiError(500, 'Internal Server Error');
    }
  
    return role;
}