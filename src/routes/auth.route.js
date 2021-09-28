import { Router } from 'express'
import { loginUser } from '../controllers/auth.controller'
import { createUser } from '../controllers/users.controller'
import { validateLogin } from '../middlewares/validators/auth/validateLogin'
import { validateSignup } from '../middlewares/validators/auth/validateSignup'
import { validationErrorHandler } from '../utils/validationErrorHandler'

const router = Router()

router.post('/login', validateLogin, validationErrorHandler, loginUser);
router.post('/signup', validateSignup, validationErrorHandler, createUser)

export default router
