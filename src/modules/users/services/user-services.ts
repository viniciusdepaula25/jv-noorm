import { UserRepository } from '../repository/user-repository'

export class UserServices{
    constructor(private readonly userRepository: UserRepository) {}
    public async create(name: string, email: string, password: string): Promise<void> {
        const findUser = await this.userRepository.findByEmail(email)

        if(findUser) throw new Error('Email já cadastrado');

        const user = await this.userRepository.createUser({name, email, password})

        return user
    }

    public async update(id: string, name: string, email: string): Promise<void> {
        const user = await this.userRepository.updateUser({id, name, email})

        return user
    }

    public async getUser(id: string): Promise<void> {
        const user = await this.userRepository.findById(id)

        return user
    }
}