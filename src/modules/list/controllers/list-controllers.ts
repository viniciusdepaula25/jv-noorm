import { Request, Response } from 'express'

import { ListServices } from '../services/list-services'

export class ListController {
  public static async create(req: Request, res: Response) {
    const { userId } = req.params
    const { title } = req.body
    const listServices = new ListServices()

    const user = await listServices.create(userId, title)

    return res.status(201).send(user)
  }
}
