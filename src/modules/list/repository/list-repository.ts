import { ListDTO } from 'src/models/ListDTO'
import { ListMemberDTO } from 'src/models/ListMemberDTO'

export type CreateListData = {
  ownerId: string
  title: string
}

export type CreateListMemberData = {
  userId: string
  listId: string
  roles: string
}

export type FindByTitle = {
  id: number
}

export interface ListRepository {
  createList(data: CreateListData): Promise<ListDTO>
  createListMember(data: CreateListMemberData): Promise<ListMemberDTO>
  findByTitle(data: FindByTitle): Promise<any>
}
