import { UsersDTO } from "src/models/UsersDTO";
import { makeUserService } from "../services/factories/make";
import { Request, Response} from 'express'

export class UsersController {
    public static async create(req: Request, res: Response) {
        const {name, email, password} = req.body
        const userServices = makeUserService()

        const user = await userServices.create(name, email, password)

        return res.status(201).send(user)
    }

    public static async update(req: Request, res: Response) {
        const {id} = req.params
        const {name, email} = req.body
        const userServices = makeUserService()

        const user = await userServices.update(id, name, email)

        return res.status(200).send(user)
    }

    public static async getUser(req: Request, res: Response) {
        const {id} = req.params
        const userServices = makeUserService()

        const user = await userServices.getUser(id)

        return res.status(200).send(user)
    }
}