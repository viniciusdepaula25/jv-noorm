import { Router } from 'express'
import {
  authorized,
  isListMember,
  isListOwner,
} from 'src/shared/middlewares/authenticated'

import { ListController } from '../controllers/list-controllers'

export const listRoute = Router()

listRoute.post('/', authorized, ListController.create)
listRoute.get('/', authorized, ListController.list)
listRoute.get('/:listId', authorized, isListMember, ListController.get)
listRoute.put('/:listId', authorized, isListOwner, ListController.update)
listRoute.delete('/:id', authorized, isListOwner, ListController.delete)
