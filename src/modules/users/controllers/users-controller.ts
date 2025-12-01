import { Request, Response } from 'express'

import { UserServices } from '../services/user-services'

export class UsersController {
  public static async create(req: Request, res: Response) {
    const { name, email, password } = req.body

    const userServices = new UserServices()

    const user = await userServices.create(name, email, password)

    return res.status(201).send(user)
  }

  public static async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, email } = req.body

    const userServices = new UserServices()

    const user = await userServices.update(id, name, email)

    return res.status(200).send(user)
  }

  public static async getUser(req: Request, res: Response) {
    const { id } = req.params

    const userServices = new UserServices()

    const user = await userServices.getUser(id)

    return res.status(200).send(user)
  }
}
