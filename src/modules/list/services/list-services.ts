import { ListDTO } from 'src/models/ListDTO'
import { NoormMemberRepository } from 'src/modules/member/repository/implementions/noorm-member-repository'
import { MemberRepository } from 'src/modules/member/repository/member-repository'

import { NoormListRepository } from '../repository/implementions/noorm-list-repository'
import { ListRepository } from '../repository/list-repository'

export class ListServices {
  private readonly listRepository: ListRepository
  private readonly listMemberRepository: MemberRepository
  constructor() {
    const listRepository = new NoormListRepository({
      tableName: 'list',
      keyField: 'id',
    })
    const listMemberRepository = new NoormMemberRepository({
      tableName: 'list_member',
      keyField: 'id',
    })

    this.listMemberRepository = listMemberRepository
    this.listRepository = listRepository
  }

  public async create(title: string, userId: string): Promise<ListDTO> {
    const list = await this.listRepository.createList({
      title,
      owner_id: userId,
    })

    await this.listMemberRepository.createMember({
      list_id: list.id,
      user_id: userId,
      role: 'owner',
    })

    return list
  }

  public async get(listId: string) {
    const list = await this.listRepository.getList(listId)

    return list
  }

  public async list(userId: string) {
    const data = {
      owner_id: userId,
      user_id: userId,
    }
    const list = await this.listRepository.getAllList(data)

    return list
  }

  public async update(title: string, listId: string) {
    await this.listRepository.updateList({
      title,
      id: listId,
    })

    const output = await this.listRepository.getList(listId)

    return output
  }

  public async delete(id: string) {
    if (!id) throw new Error('Necessario informar ID da lista')
    await this.listRepository.deleteList(id)

    return true
  }
}
