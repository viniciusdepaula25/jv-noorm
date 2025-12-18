import express from 'express'

import { listRoute } from './modules/list/routes/list-routes'
import { loginRoutes } from './modules/login/routes/login.routes'
import { memberRoutes } from './modules/member/routes/member-routes'
import { taskRoutes } from './modules/task/routes/task-routes'
import { userRoutes } from './modules/users/routes/users-routes'

export const routes = express.Router()

routes.use('/users', userRoutes)
routes.use('/list', listRoute)
routes.use('/login', loginRoutes)
routes.use('/members', memberRoutes)
routes.use('/task', taskRoutes)
