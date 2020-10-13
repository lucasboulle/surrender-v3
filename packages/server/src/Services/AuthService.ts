import { findByEmailAndPassword } from "../Repository/UserRepository"
import { encode, decode } from 'jwt-simple'

const secret = 'rLN"55@d76y_'

export function generateToken(email: string, password: string) {

  const payload = JSON.stringify({
    'email': email,
    'password': password
  });

  return encode(payload, secret)
}

export const decodeUserToken = (token: string) => {
  let decoded
  try {
    decoded = decode(token, secret)
  } catch (e) {
    console.error(e)
  }
  return decoded
}

export const authenticate = async (email: string, password: string) => {
  return await findByEmailAndPassword(email, password)
}