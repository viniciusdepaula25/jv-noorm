import { ListDTO } from 'src/models/ListDTO'
import { ListMemberDTO } from 'src/models/ListMemberDTO'

export type CreateListData = {
  title: string
  owner_id: string
}

export type CreateListMemberData = {
  user_id: string
  list_id: string
  role: string
}

export type GetListData = {
  id: string
}

export type GetAllListData = {
  owner_id: string
  user_id: string
}

export type UpdateListData = {
  title: string
  id: string
}

export interface ListRepository {
  createList(data: CreateListData): Promise<ListDTO>
  createListMember(data: CreateListMemberData): Promise<ListMemberDTO>
  getAllList(data: GetAllListData): Promise<any>
  getList(data: GetListData): Promise<any>
  updateList(data: UpdateListData): Promise<any>
}
