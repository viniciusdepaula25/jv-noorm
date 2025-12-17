import { Router } from 'express'
import { authorized } from 'src/shared/middlewares/authenticated'

import { UsersController } from '../controllers/users-controller'

export const userRoutes = Router()

userRoutes.post('/', UsersController.create)
userRoutes.put('/update/:id', authorized, UsersController.update)
userRoutes.get('/:id', authorized, UsersController.getUser)
userRoutes.delete('/:id', authorized, UsersController.delete)
