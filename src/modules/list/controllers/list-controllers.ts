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
    const { id } = req.params

    const listServices = new ListServices()

    const output = await listServices.getList(id)

    return res.status(200).send(output)
  }

  public static async getAllList(req: Request, res: Response) {
    const { userId } = req.params

    const listServices = new ListServices()

    const output = await listServices.getAllList(userId)

    return res.status(200).send(output)
  }

  public static async update(req: Request, res: Response) {
    const { id } = req.params
    const { title } = req.body

    const listServices = new ListServices()

    const output = await listServices.update(title, id)

    return res.status(200).send(output)
  }

  public static async delete(req: Request, res: Response) {
    const { id } = req.params

    const listServices = new ListServices()

    const output = await listServices.delete(id)

    return res.status(200).send(output)
  }
}
