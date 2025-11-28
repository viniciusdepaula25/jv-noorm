import { Router } from 'express'

import { VehicleControllers } from '../controllers/vehicle-controller'

export const vehicleRoutes = Router()

vehicleRoutes.post('/create', VehicleControllers.create)
