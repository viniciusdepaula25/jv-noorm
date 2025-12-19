import { TaskDTO } from 'src/models/TaskDTO'

export type CreateTasksData = {
  list_id: string
  title: string
  description: string
  assigned_to_id: string
}

export type UpdateTaskData = {
  id: string
  title: string
  description: string
  assigned_to_id: string
}

export type IsCompleted = {
  id: string
  isCompleted: string
}

export interface TasksRepository {
  createTask(data: CreateTasksData): Promise<TaskDTO>
  findAll(listId: string): Promise<any>
  updateTask(data: UpdateTaskData): Promise<any>
  findById(id: string): Promise<any>
  toggle(data: IsCompleted): Promise<any>
}
