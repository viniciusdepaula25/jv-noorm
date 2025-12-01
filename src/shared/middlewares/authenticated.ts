import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { env } from 'src/env'

export async function authorized(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let token = req.headers.authorization

  if (!token) throw new Error('Nâo autorizado')

  token = token.split(' ')[1]

  try {
    const decodeToken = jwt.verify(token, env.JWT_SECRET)

    const { id } = decodeToken as { id: string }

    req.user = { id }

    next()
  } catch (err) {
    throw new Error('Não autorizado')
  }
}
