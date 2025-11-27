import { Request, Response } from "express";
import { VeiculoDTO } from "src/models/VeiculoDTO";
import { VehicleServices } from "../services/vehicle-service";

export type VeiculoDTOExpress = Omit<VeiculoDTO, 'id' | 'created_at'> & {
    id?: string
}

export class VehicleControllers {
    public static async create(request: Request, response: Response): Promise<void> {
        const body: VeiculoDTO = request.body;
        const {nome, modelo, fabricante, ano} = body

        const output = await VehicleServices.create({
            nome,
            modelo,
            fabricante,
            ano
        })

        response.status(201).send(output);
    }
}