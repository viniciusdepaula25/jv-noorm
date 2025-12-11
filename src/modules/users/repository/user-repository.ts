import { UsersDTO } from 'src/models/UsersDTO'

export type CreateUserData = {
  name: string
  email: string
  password: string
}

export type UpdateUserData = {
  id: string
  name: string
  email: string
}

export interface UserRepository {
  createUser(data: CreateUserData): Promise<any>
  findByEmail(email: string): Promise<any>
  updateUser(data: UpdateUserData): Promise<UsersDTO>
  findById(id: string): Promise<any>
  findByLogin(email: string): Promise<UsersDTO>
  deleteUser(id: string): Promise<any>
}
