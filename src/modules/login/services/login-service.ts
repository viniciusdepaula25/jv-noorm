import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from 'src/env'
import { NoormUserRepository } from 'src/modules/users/repository/implementations/noorm-user-repository'
import { UserRepository } from 'src/modules/users/repository/user-repository'

export class LoginService {
  private readonly userRepository: UserRepository
  constructor() {
    const userRepository = new NoormUserRepository({
      tableName: 'users',
    })

    this.userRepository = userRepository
  }

  public async login(login: string, password: string) {
    const user = await this.userRepository.findByLogin(login)

    if (!user) {
      throw new Error('Email ou senha invalidos')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email ou senha invalidos')
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    )

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    }
  }
}
