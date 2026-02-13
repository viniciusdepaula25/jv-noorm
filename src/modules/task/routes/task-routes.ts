import { Router } from 'express'
import {
  authorized,
  isListMember,
  isTaskOwnerOrAssigned,
} from 'src/shared/middlewares/authenticated'

import { TaskControllers } from '../controllers/task-controllers'

export const taskRoutes = Router()

taskRoutes.post('/:listId', authorized, isListMember, TaskControllers.create)
taskRoutes.get('/:listId', authorized, isListMember, TaskControllers.list)
taskRoutes.put(
  '/lista/:listId/tarefa/:id',
  authorized,
  isListMember,
  TaskControllers.update,
)
taskRoutes.patch(
  '/:listId/lists/:taskId/iscompleted',
  authorized,
  isTaskOwnerOrAssigned,
  TaskControllers.toggle,
)
taskRoutes.delete(
  '/:id',
  authorized,
  isTaskOwnerOrAssigned,
  TaskControllers.delete,
)
