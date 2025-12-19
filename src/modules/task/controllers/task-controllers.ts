import { Request, Response } from 'express'

import { TaskServices } from '../services/task-service'

export class TaskControllers {
  public static async create(req: Request, res: Response) {
    const { listId } = req.params

    const { title, description, assignedToId } = req.body

    const taskService = new TaskServices()

    const output = await taskService.create({
      listId,
      title,
      description,
      assignedToId,
    })

    return res.status(201).send(output)
  }

  public static async list(req: Request, res: Response) {
    const { listId } = req.params

    const taskService = new TaskServices()

    const output = await taskService.list(listId)

    return res.status(200).send(output)
  }

  public static async update(req: Request, res: Response) {
    const { id } = req.params

    const { title, description, assignedToId } = req.body

    const taskService = new TaskServices()

    const output = await taskService.update({
      id,
      title,
      description,
      assignedToId,
    })

    return res.status(200).send(output)
  }
}
