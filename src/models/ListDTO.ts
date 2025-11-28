export interface ListDTO {
  id: string;
  title: string;
  owner_id: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
