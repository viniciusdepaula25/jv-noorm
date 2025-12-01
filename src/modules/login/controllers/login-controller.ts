import { Request, Response } from 'express'

import { LoginService } from '../services/login-service'

export class LoginController {
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body

    const loginService = new LoginService()

    const output = await loginService.login(email, password)

    return res.status(200).send(output)
  }
}
