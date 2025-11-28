export interface ListMemberDTO {
  id: string;
  list_id: string;
  user_id: string;
  role?: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
