import { authService } from '../services'

export async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body
    const data = await authService.login(email, password)
    res.status(200).json({
      success: true,
      token: data,
    })
  } catch (err) {
    next(err)
  }
}
