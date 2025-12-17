import { Router } from 'express'
import { authorized } from 'src/shared/middlewares/authenticated'

import { MemberControllers } from '../controllers/member-controllers'

export const memberRoutes = Router()

memberRoutes.post('/:listId', authorized, MemberControllers.create)
memberRoutes.delete('/', authorized, MemberControllers.delete)
memberRoutes.get('/list/:listId', authorized, MemberControllers.list)
