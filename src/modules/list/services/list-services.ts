import { ListDTO } from 'src/models/ListDTO'

import { ListRepository } from '../repository/list-repository'

export class ListServices {
  constructor(private readonly listRepository: ListRepository) {}

  public async create(userId: string, title: string): Promise<ListDTO> {
    const list = await this.listRepository.createList({
      ownerId: userId,
      title,
    })

    await this.listRepository.createListMember({
      listId: list.id,
      userId,
      roles: 'owner',
    })

    return list
  }
}
