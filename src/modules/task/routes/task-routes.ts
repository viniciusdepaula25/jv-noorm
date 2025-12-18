import { Router } from 'express'
import { authorized } from 'src/shared/middlewares/authenticated'

import { TaskControllers } from '../controllers/task-controllers'

export const taskRoutes = Router()

taskRoutes.post('/:listId', authorized, TaskControllers.create)
taskRoutes.get('/:listId', authorized, TaskControllers.list)
