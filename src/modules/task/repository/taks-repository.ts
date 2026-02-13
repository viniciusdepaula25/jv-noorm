import { TaskDTO } from 'src/models/TaskDTO'

export type CreateTasksData = {
  list_id: string
  title: string
  description: string
  assigned_to_id: string
}

export type UpdateTaskData = {
  list_id: string
  id: string
  title: string
  description: string
  assigned_to_id: string
}

export type IsCompleted = {
  id: string
  is_completed: boolean
}

export type FindOwnerAndAssigned = {
  task_id: string
  list_id: string
}

export interface TasksRepository {
  createTask(data: CreateTasksData): Promise<TaskDTO>
  findAll(listId: string): Promise<any>
  updateTask(data: UpdateTaskData): Promise<any>
  findById(id: string): Promise<any>
  toggle(data: IsCompleted): Promise<any>
  deleteTask(id: string): Promise<any>
  findOwnerAndAssigned(data: FindOwnerAndAssigned): Promise<any>
}
