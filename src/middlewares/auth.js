import passport from 'passport'
import { roleService } from '../services/index'

export async function passportJWTAuth(req, res, next) {
  passport.authenticate('jwt', (err, user) => {
    if (err) return next(err)
    if (!user)
      return res.status(403).json({
        success: false,
        message: 'You need to be logged in',
      })
    res.locals.user = user
    next()
  })(req, res, next)
}

export function roleAuthorization(roles){
  return async function(req, res, next) {
    try {
      const roleId = parseInt(res.locals.user.UserRole.roleId);
      const userRole = await roleService.getUserRole(roleId);
      if(roles.indexOf(userRole.name) > -1){
        return next();
      } else {
        res.status(401).json({
          success: false,
          message: 'You are not authorized access this page'
        });
      }
    } catch(err) {
      next(err);
    }
  }
}
