import { Router } from 'express'
import { userRouter, usersRouter } from './user.route'
import authRoute from './auth.route'
import passwordRoute from './password.route'
import { passportJWTAuth as requireAuthentication } from '../middlewares/auth'

const router = Router()

router.use('/user', requireAuthentication, userRouter);
router.use('/users', requireAuthentication, usersRouter);
router.use('/auth', authRoute);
router.use('/password', passwordRoute);

export default router
