import { ListMemberDTO } from 'src/models/ListMemberDTO'

export type CreateMemberData = {
  user_id: string
  list_id: string
  role: string
}

export type DeleteMemberData = {
  user_id: string
  list_id: string
}

export interface MemberRepository {
  createMember(data: CreateMemberData): Promise<ListMemberDTO>
  deleteMember(data: DeleteMemberData): Promise<any>
  findAll(listId: string): Promise<any>
}
