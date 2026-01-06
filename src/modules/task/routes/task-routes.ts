import { Router } from 'express'
import { authorized } from 'src/shared/middlewares/authenticated'

import { TaskControllers } from '../controllers/task-controllers'

export const taskRoutes = Router()

taskRoutes.post('/:listId', authorized, TaskControllers.create)
taskRoutes.get('/:listId', authorized, TaskControllers.list)
taskRoutes.put('/:id', authorized, TaskControllers.update)
taskRoutes.patch('/:id/iscompleted', authorized, TaskControllers.toggle)
taskRoutes.delete('/:id', authorized, TaskControllers.delete)
