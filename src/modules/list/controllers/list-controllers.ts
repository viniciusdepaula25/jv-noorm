import { Request, Response } from 'express'

import { ListServices } from '../services/list-services'

export class ListController {
  public static async create(req: Request, res: Response) {
    const userId = req.user.id
    const { title } = req.body
    const listServices = new ListServices()

    const output = await listServices.create(title, userId)

    return res.status(201).send(output)
  }

  public static async get(req: Request, res: Response) {
    const { listId } = req.params

    const listServices = new ListServices()

    const output = await listServices.get(listId)

    return res.status(200).send(output)
  }

  public static async list(req: Request, res: Response) {
    const userId = req.user.id

    const listServices = new ListServices()

    const output = await listServices.list(userId)

    return res.status(200).send(output)
  }

  public static async update(req: Request, res: Response) {
    const { listId } = req.params
    const { title } = req.body

    const listServices = new ListServices()

    const output = await listServices.update(title, listId)

    return res.status(200).send(output)
  }

  public static async delete(req: Request, res: Response) {
    const { id } = req.params

    const listServices = new ListServices()

    const output = await listServices.delete(id)

    return res.status(200).send(output)
  }
}
