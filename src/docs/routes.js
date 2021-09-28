import getUser from './user/get.user'
import getUsers from './user/get.users'
import deleteUser from './user/delete.user'
import editUser from './user/edit.user'
import loginUser from './auth/login'
import signupUser from './auth/signup'
import requestPasswordReset from './password/request.password.reset'
import resetPassword from './password/reset.password'

export default {
    paths:{
        '/api/user':{
            ...getUser
        },
        '/api/users':{
            ...getUsers
        },
        '/api/user/delete':{
            ...deleteUser
        },
        '/api/user/edit':{
            ...editUser
        },
        '/api/auth/login':{
            ...loginUser
        },
        '/api/auth/signup':{
            ...signupUser
        },
        '/api/password/reset':{
            ...requestPasswordReset
        },
        '/api/password/usetoken/{userId}/{token}':{
            ...resetPassword
        }
    }
}