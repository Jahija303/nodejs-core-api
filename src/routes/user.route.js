// /api/user/...
import { Router } from 'express'
import { roleAuthorization } from '../middlewares/auth';
import {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} from '../controllers/users.controller'
import { validateUserDelete } from '../middlewares/validators/user/validateUserDelete'
import { validateUserUpdate } from '../middlewares/validators/user/validateUserUpdate';
import { validationErrorHandler } from '../utils/validationErrorHandler'

const userRouter = Router()
const usersRouter = Router()

//userRouter.get('/', roleAuthorization(['user','admin']), getUser)
//userRouter.delete('/delete', roleAuthorization('admin'), deleteUser);
//userRouter.put('/edit', roleAuthorization(['user','admin']), updateUser)

//usersRouter.get('/', roleAuthorization('admin'), getAllUsers)

userRouter.get('/', getUser)
userRouter.delete('/delete', validateUserDelete, validationErrorHandler, deleteUser);
userRouter.put('/edit', validateUserUpdate, validationErrorHandler, updateUser)

usersRouter.get('/', getAllUsers)

export { userRouter, usersRouter }
