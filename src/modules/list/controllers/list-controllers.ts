import { Request, Response } from 'express'

import { ListServices } from '../services/list-services'

export class ListController {
  public static async create(req: Request, res: Response) {
    const { userId } = req.params
    const { title } = req.body
    const listServices = new ListServices()

    const output = await listServices.create(title, userId)

    return res.status(201).send(output)
  }

  public static async getList(req: Request, res: Response) {
    const { userId } = req.params

    const listServices = new ListServices()

    const output = await listServices.getList(userId)

    return res.status(200).send(output)
  }
}
