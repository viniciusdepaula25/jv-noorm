import { Request, Response } from 'express'

import { makeListService } from '../services/factories/make-list'

export class ListController {
  public static async create(req: Request, res: Response) {
    const { userId } = req.params
    const { title } = req.body
    const ListServices = makeListService()

    const user = await ListServices.create(userId, title)

    return res.status(201).send(user)
  }
}
