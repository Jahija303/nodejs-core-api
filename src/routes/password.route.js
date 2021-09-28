import { Router } from 'express'
import { passwordResetLimiter } from '../config/rateLimiterConf'
import {
  requestResetPassword,
  resetPassword,
} from '../controllers/users.controller'
import { validationErrorHandler } from '../utils/validationErrorHandler'
import { validateRequestPasswordReset } from '../middlewares/validators/password/validateRequestPasswordReset'
import { validatePasswordReset } from '../middlewares/validators/password/validatePasswordReset'

const router = Router()

router.use(passwordResetLimiter)
router.post('/reset', validateRequestPasswordReset, validationErrorHandler, requestResetPassword)
router.post('/usetoken/:userId/:token', validatePasswordReset, validationErrorHandler, resetPassword)

export default router
