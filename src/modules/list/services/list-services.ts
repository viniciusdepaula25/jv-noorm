import { ListDTO } from 'src/models/ListDTO'

import { NoormListRepository } from '../repository/implementions/noorm-list-repository'
import { ListRepository } from '../repository/list-repository'

export class ListServices {
  private readonly listRepository: ListRepository
  private readonly listMemberRepository: ListRepository
  constructor() {
    const listRepository = new NoormListRepository({
      tableName: 'list',
    })
    const listMemberRepository = new NoormListRepository({
      tableName: 'list_member',
    })

    this.listMemberRepository = listMemberRepository
    this.listRepository = listRepository
  }

  public async create(userId: string, title: string): Promise<ListDTO> {
    const list = await this.listRepository.createList({
      ownerId: userId,
      title,
    })

    await this.listMemberRepository.createListMember({
      listId: list.id,
      userId,
      roles: 'owner',
    })

    return list
  }
}
