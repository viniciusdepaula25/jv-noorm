import { NoormUserRepository } from '../../repository/implementations/noorm-user-repository'
import { UserServices } from '../user-services'

export function makeUserService() {
  const userRepository = new NoormUserRepository({
    tableName: 'users',
  })

  return new UserServices(userRepository)
}
