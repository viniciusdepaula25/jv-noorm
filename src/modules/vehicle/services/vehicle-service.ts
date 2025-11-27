import { VeiculoDTO } from "src/models/VeiculoDTO";
import { VehicleCrud } from "../crud/vehicle-crud";
import { VeiculoDTOExpress } from "../controllers/vehicle-controller";

export class VehicleServices{
    static async create(data: VeiculoDTOExpress): Promise<VeiculoDTO> {
        const vehicleCrud = new VehicleCrud()
        const newVehicle = await vehicleCrud.create({data})

        return newVehicle
    }
}