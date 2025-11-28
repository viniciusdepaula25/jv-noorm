import express from 'express'

import { userRoutes } from './modules/users/routes/users-routes'
import { vehicleRoutes } from './modules/vehicle/routes/vehicle-routes'

export const routes = express.Router()

routes.use('/vehicle', vehicleRoutes)
routes.use('/users', userRoutes)
