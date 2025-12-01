import bcrypt from 'bcrypt'
import { UsersDTO } from 'src/models/UsersDTO'

import { UserRepository } from '../repository/user-repository'

export class UserServices {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(name: string, email: string, password: string) {
    const findUser = await this.userRepository.findByEmail(email)

    if (findUser) throw new Error('Email já cadastrado')

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = await this.userRepository.createUser({
      name,
      email,
      password: passwordHash,
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }

  public async update(id: string, name: string, email: string) {
    const user = await this.userRepository.updateUser({ id, name, email })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }

  public async getUser(id: string): Promise<UsersDTO> {
    const user = await this.userRepository.findById(id)

    return user
  }
}
