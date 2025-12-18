import { TaskDTO } from 'src/models/TaskDTO'

export type CreateTasksData = {
  list_id: string
  title: string
  description: string
  assingned_to_id: string
}

export interface TasksRepository {
  createTask(data: CreateTasksData): Promise<TaskDTO>
  findAll(listId: string): Promise<any>
}
