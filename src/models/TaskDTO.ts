export interface TaskDTO {
  id: string;
  list_id: string;
  title: string;
  description?: string;
  is_completed: string;
  assingned_to_id: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
