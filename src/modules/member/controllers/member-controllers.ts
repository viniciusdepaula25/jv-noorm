import { Request, Response } from 'express'

import { MemberServices } from '../services/member-services'

export class MemberControllers {
  public static async create(req: Request, res: Response) {
    const { listId } = req.params

    const { email } = req.body

    const memberServices = new MemberServices()

    const output = await memberServices.create(listId, email)

    return res.status(201).send(output)
  }

  public static async delete(req: Request, res: Response) {
    const { userId, listId } = req.params

    const memberServices = new MemberServices()

    await memberServices.delete(userId, listId)

    return res.status(200).json({
      success: true,
    })
  }

  public static async list(req: Request, res: Response) {
    const { listId } = req.params

    const memberServices = new MemberServices()

    const output = await memberServices.list(listId)

    return res.status(200).send(output)
  }
}
