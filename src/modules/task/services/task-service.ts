import { NoormtTaskRepository } from '../repository/implementations/noorm-user-repository'
import { TasksRepository } from '../repository/taks-repository'

type createData = {
  listId: string
  title: string
  description: string
  assignedToId: string
}

type updateData = {
  id: string
  title: string
  description: string
  assignedToId: string
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
    assignedToId,
  }: createData) {
    if (!listId) throw new Error('É necessario informar o ID da lista.')
    if (!title) throw new Error('É necessario informar o titulo.')
    if (!description) throw new Error('É necessario imformar a descrição')
    if (!assignedToId) throw new Error('É necessario informar um colaborador.')

    const task = await this.taskRepository.createTask({
      list_id: listId,
      title,
      description,
      assigned_to_id: assignedToId,
    })

    return task
  }

  public async list(listId: string) {
    if (!listId) throw new Error('É necessario informar o ID da lista.')

    const task = await this.taskRepository.findAll(listId)

    return task
  }

  public async update({ id, title, description, assignedToId }: updateData) {
    if (!title) throw new Error('É necessario informar o titulo.')
    if (!description) throw new Error('É necessario informar o descrição.')
    if (!description) throw new Error('É necessario informar um colaborador.')

    const findTask = await this.taskRepository.findById(id)
    if (!findTask) throw new Error('Nenhuma task encontrado com id informado')

    await this.taskRepository.updateTask({
      id,
      title,
      description,
      assigned_to_id: assignedToId,
    })
    const result = await this.taskRepository.findById(id)

    return result
  }
}
