import express from 'express';

import {vehicleRoutes} from './modules/vehicle/routes/vehicle-routes'
import { userRoutes } from './modules/users/routes/users-routes';

export const routes = express.Router()

routes.use('/vehicle', vehicleRoutes)
routes.use('/users', userRoutes)