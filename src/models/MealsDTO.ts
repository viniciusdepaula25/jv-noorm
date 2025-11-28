export interface MealsDTO {
  id: number
  name: string
  description: string
  date_time_meal: Date
  on_diet: number
  user_id: number
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
