import fs from 'fs'
import path from 'path'
import { getUserByID } from '../services/user.service'
import ApiError from '../utils/ApiError'

//passport-jwt does not natively support ES6 syntax
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
}

export default async function initialize(passport) {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      try {
        const user = await getUserByID(parseInt(jwt_payload.id))
        if(user.password !== jwt_payload.password) {
          throw new ApiError(401, "Login token expired, please log in again!");
        }
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      } catch (err) {
        return done(err, false)
      }
    })
  )
}
