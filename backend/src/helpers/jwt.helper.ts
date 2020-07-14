import jwt, { SignOptions } from 'jsonwebtoken'

require('dotenv').config()

const tokenPrivateKey: string = process.env.JWT_TOKEN_PRIVATE_KEY!
const refreshTokenPrivateKey: string = process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY!

const options = {
  expiresIn: '30 minutes'
}

const refreshOptions = {
  expiresIn: '30 days'
}

export const generateJwt = (payload: SignOptions) => {
  return jwt.sign(payload, tokenPrivateKey, options)
}

export const generateRefreshJwt = (payload: SignOptions) => {
  return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions)
}

export const verifyJwt = (token: string) => {
  return jwt.verify(token, tokenPrivateKey)
}

export const verifyRefreshJwt = (token: string) => {
  return jwt.verify(token, refreshTokenPrivateKey)
}

export const getTokenFromHeaders = (headers: any) => {
  const token = headers.authorization
  return token ? token.slice(7, token.length) : null
}