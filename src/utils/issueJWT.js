import fs from 'fs'
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'

const pathToKey = path.join(__dirname, '..', 'id_rsa_priv.pem')
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8')

export function issueJWT(user) {
  const id = user.id
  const password = user.password

  const expiresIn = 900

  const payload = {
    id: id,
    password: password,
  }

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: 'RS256',
  })

  return {
    token: 'Bearer ' + signedToken,
    expires: expiresIn,
  }
}

export const usePasswordHashToMakeToken = ({
  password: password,
  id: id,
  createdAt: createdAt,
}) => {
  const secret = password + '-' + createdAt
  const token = jsonwebtoken.sign({ id }, secret, {
    expiresIn: 3600, // 1 hour
  })
  return token
}
