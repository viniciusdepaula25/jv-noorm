import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { env } from 'src/env'
import { MemberServices } from 'src/modules/member/services/member-services'
import { TaskServices } from 'src/modules/task/services/task-service'

export async function authorized(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let token = req.headers.authorization

  if (!token) throw new Error('Nâo autorizado')

  token = token.split(' ')[1]

  try {
    const decodeToken = jwt.verify(token, env.JWT_SECRET)

    const { id } = decodeToken as { id: string }

    req.user = { id }

    next()
  } catch (err) {
    throw new Error('Não autorizado')
  }
}

export async function isListMember(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userId = req.user.id
  const { listId } = req.params

  const memberServices = new MemberServices()

  const member = await memberServices.getRole(listId, userId)

  if (!member || member.length === 0) {
    return res
      .status(403)
      .send('Acesso negado ou nehuma lista encontrada com ID fornecido.')
  }

  next()
}

export async function isListOwner(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userId = req.user.id
  const { listId } = req.params

  const memberServices = new MemberServices()

  const list = await memberServices.getRole(listId, userId)

  if (!list) {
    return res.status(404).send('Lista não encontrada.')
  }

  if (list.role === 'member') {
    return res.status(403).send('Acesso negado.')
  }

  next()
}

export async function isTaskOwnerOrAssigned(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userId = req.user.id
  const { taskId, listId } = req.params

  const taskServices = new TaskServices()

  const task = await taskServices.findOwnerAndAssigned(taskId, listId)

  if (!task) {
    return res.status(404).send('Tarefa não encontrada.')
  }

  if (task.owner_id !== userId || task.assigned_to_id !== userId) {
    return res.status(403).send('Acesso negado')
  }

  next()
}
