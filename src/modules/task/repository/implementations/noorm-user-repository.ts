// import { db } from 'src/db/database'
import { TaskDTO } from 'src/models/TaskDTO'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import { CreateTasksData, TasksRepository } from '../taks-repository'

export class NoormtTaskRepository
  extends TesteBasicCrud
  implements TasksRepository
{
  public constructor(params: {
    tableName: string
    keyField?: string
    listField?: string
    softDelete?: boolean
  }) {
    super({
      tableName: params.tableName,
      keyField: params.keyField,
      listField: params.listField,
      softDelete:
        params.softDelete === undefined || params.softDelete === null
          ? true
          : params.softDelete,
    })
  }

  async createTask(data: CreateTasksData): Promise<TaskDTO> {
    const task = await this.create({ data })

    return task
  }
}
