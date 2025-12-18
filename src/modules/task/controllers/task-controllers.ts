import { Request, Response } from 'express'

import { TaskServices } from '../services/task-service'

export class TaskControllers {
  public static async create(req: Request, res: Response) {
    const { listId } = req.params

    const { title, description, assingnedToId } = req.body

    const taskService = new TaskServices()

    const output = await taskService.create({
      listId,
      title,
      description,
      assingnedToId,
    })

    return res.status(201).send(output)
  }
}
