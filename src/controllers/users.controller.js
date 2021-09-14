import { userService } from '../services';

export async function getAllUsers(req, res, next) {
  try {
    const result = await userService.queryUsers();
    res.status(200).json({
      success: true,
      message: 'User fetch successful',
      data: result
    });
  } catch (err) {
    next(err);
  }
}

export async function getUser(req, res, next) {
  try {
    const result = await userService.getUserByEmail(req.body.email);
    res.status(200).json({
      success: true,
      message: 'User fetch successful',
      data: result
    });
  } catch (err) {
    next(err);
  }
}

export async function createUser(req, res, next) {
  try {
    const result = await userService.createUser(req.body);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result
    });
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    await userService.deleteUserByID(req.body.id);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch(err) {
    next(err);
  }
}

export async function updateUser(req, res, next) {
  try {
    await userService.updateUser(req.body);
    res.status(200).json({
      success: true,
      message: 'User updated successfully'
    });
  } catch(err) {
    next(err);
  }
}