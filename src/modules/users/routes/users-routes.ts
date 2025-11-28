import { Router } from 'express'

import { UsersController } from '../controllers/users-controller'

export const userRoutes = Router()

userRoutes.post('/', UsersController.create)
userRoutes.put('/update/:id', UsersController.update)
userRoutes.get('/:id', UsersController.getUser)
