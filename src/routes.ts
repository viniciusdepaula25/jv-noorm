import express from 'express'

import { listRoute } from './modules/list/routes/list-routes'
import { userRoutes } from './modules/users/routes/users-routes'

export const routes = express.Router()

routes.use('/users', userRoutes)
routes.use('/list', listRoute)
