import { NoormtTaskRepository } from '../repository/implementations/noorm-user-repository'
import { TasksRepository } from '../repository/taks-repository'

type createData = {
  listId: string
  title: string
  description: string
  assingnedToId: string
}

export class TaskServices {
  private readonly taskRepository: TasksRepository
  constructor() {
    const taskRepository = new NoormtTaskRepository({
      tableName: 'task',
      keyField: 'id',
    })

    this.taskRepository = taskRepository
  }

  public async create({
    listId,
    title,
    description,
    assingnedToId,
  }: createData) {
    const task = await this.taskRepository.createTask({
      list_id: listId,
      title,
      description,
      assingned_to_id: assingnedToId,
    })

    return task
  }
}
