import { Router } from 'express'
import { authorized } from 'src/shared/middlewares/authenticated'

import { ListController } from '../controllers/list-controllers'

export const listRoute = Router()

listRoute.post('/create/:userId', authorized, ListController.create)
listRoute.get('/:userId', authorized, ListController.getAllList)
listRoute.get('/listas/:id', authorized, ListController.getList)
listRoute.put('/:id', authorized, ListController.update)
