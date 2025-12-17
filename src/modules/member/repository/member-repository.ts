import { ListMemberDTO } from 'src/models/ListMemberDTO'

export type CreateMemberData = {
  user_id: string
  list_id: string
  role: string
}

export type DeleteMember = {
  user_id: string
}

export interface MemberRepository {
  createMember(data: CreateMemberData): Promise<ListMemberDTO>
  deleteMember(data: DeleteMember): Promise<any>
  findAll(id: string): Promise<any>
}
