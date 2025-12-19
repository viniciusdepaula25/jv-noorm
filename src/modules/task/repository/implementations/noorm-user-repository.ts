import { db } from 'src/db/database'
import { TaskDTO } from 'src/models/TaskDTO'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import {
  CreateTasksData,
  TasksRepository,
  UpdateTaskData,
} from '../taks-repository'

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

  async findById(id: string) {
    const task = await db.queryRow({
      sql: `SELECT t.*
              FROM task t
             WHERE id = ?
               AND deleted_at IS NULL`,

      values: [id],
    })

    return task
  }

  async findAll(listId: string) {
    const task = await db.queryRows({
      sql: `SELECT t.list_id,
                   t.title,
                   t.description,
                   t.is_completed,
                   t.assigned_to_id
              FROM task t    
             WHERE t.list_id = ?
               AND t.deleted_at IS NULL`,
      values: [listId],
    })

    return task
  }

  async updateTask(data: UpdateTaskData) {
    const task = await db.update({
      command: `UPDATE task
                   SET title = ?, description = ?, assigned_to_id = ?
                 WHERE id = ?
                   AND deleted_at IS NULL`,
      values: [data.title, data.description, data.assigned_to_id, data.id],
    })

    return task
  }
}
