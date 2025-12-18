import { NoormUserRepository } from 'src/modules/users/repository/implementations/noorm-user-repository'
import { UserRepository } from 'src/modules/users/repository/user-repository'

import { NoormMemberRepository } from '../repository/implementions/noorm-member-repository'
import { MemberRepository } from '../repository/member-repository'

export class MemberServices {
  private readonly listMemberRepository: MemberRepository
  private readonly userRepository: UserRepository
  constructor() {
    const listMemberRepository = new NoormMemberRepository({
      tableName: 'list_member',
      keyField: 'id',
    })
    const userRepository = new NoormUserRepository({
      tableName: 'users',
      keyField: 'id',
    })

    this.listMemberRepository = listMemberRepository
    this.userRepository = userRepository
  }

  public async create(listId: string, email: string) {
    const user = await this.userRepository.findByEmail(email)
    if (!user) throw new Error('Nenhum usuario cadastrado com esse email.')

    const member = await this.listMemberRepository.createMember({
      list_id: listId,
      user_id: user.id,
      role: 'member',
    })

    return member
  }

  public async delete(userId: string, listId: string) {
    await this.listMemberRepository.deleteMember({
      user_id: userId,
      list_id: listId,
    })
  }

  public async list(listId: string) {
    const member = await this.listMemberRepository.findAll(listId)
    if (!member) throw new Error('Nenhuma lista cadastrada com o id informado.')

    return member
  }
}
