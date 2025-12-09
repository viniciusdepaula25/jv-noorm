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

  public async create(title: string, userId: string): Promise<ListDTO> {
    const list = await this.listRepository.createList({
      title,
      owner_id: userId,
    })

    await this.listMemberRepository.createListMember({
      list_id: list.id,
      user_id: userId,
      role: 'owner',
    })

    return list
  }

  public async getList(userId: string) {
    const data = {
      owner_id: userId,
      user_id: userId,
    }
    const list = await this.listMemberRepository.getList(data)

    return list
  }
}
