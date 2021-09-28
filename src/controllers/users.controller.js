import { userService } from '../services/index'

export async function getAllUsers(req, res, next) {
  try {
    const users = await userService.queryUsers()
    res.status(200).json({
      success: true,
      message: 'User fetch successful',
      data: users,
    })
  } catch (err) {
    next(err)
  }
}

export async function getUser(req, res, next) {
  try {
    const userId = parseInt(res.locals.user.id)
    const user = await userService.getUserByID(userId)
    res.status(200).json({
      success: true,
      message: 'User fetch successful',
      data: user,
    })
  } catch (err) {
    next(err)
  }
}

export async function deleteUser(req, res, next) {
  try {
    const userId = req.body.id
    await userService.deleteUserByID(userId)
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    })
  } catch (err) {
    next(err)
  }
}

export async function updateUser(req, res, next) {
  try {
    const userData = req.body
    userData.id = parseInt(res.locals.user.id)
    await userService.updateUser(userData)
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
    })
  } catch (err) {
    next(err)
  }
}

export async function createUser(req, res, next) {
  try {
    const userData = req.body
    const user = await userService.createUser(userData)
    res.status(200).json({
      success: true,
      message: 'User registered successfully',
      data: user,
    })
  } catch (err) {
    next(err)
  }
}

export async function requestResetPassword(req, res, next) {
  try {
    const email = req.body.email;
    await userService.requestResetPassword(email)
    res.status(202).json({
      success: true,
      message: 'An email has been sent to you with a link to reset your password',
    })
  } catch (err) {
    next(err)
  }
}

export async function resetPassword(req, res, next) {
  try {
    const userId = parseInt(req.params.userId)
    const token = req.params.token
    const { password, confirmPassword } = req.body
    await userService.resetPassword(userId, token, password, confirmPassword);
    res.status(200).json({
      success: true,
      message: 'Your password has been successfully reset',
    })
  } catch (err) {
    next(err)
  }
}