import { UserServices } from "../user-services";
import { UserRepository } from "../../repository/user-repository";
import { NoormUserRepository } from "../../repository/implementations/noorm-user-repository";

export function makeUserService() {
    const userRepository = new NoormUserRepository({
        tableName: 'users'
    })

    return new UserServices(userRepository)
}