import { Router } from 'express'

import { ListController } from '../controllers/list-controllers'

export const listRoute = Router()

listRoute.post('/create/:userId', ListController.create)
