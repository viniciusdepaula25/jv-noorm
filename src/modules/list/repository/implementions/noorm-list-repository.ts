import { db } from 'src/db/database'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import {
  ListRepository,
  CreateListData,
  FindByTitle,
  CreateListMemberData,
} from '../list-repository'

export class NoormListRepository
  extends TesteBasicCrud
  implements ListRepository
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

  async createList(data: CreateListData) {
    const list = await this.create({
      data,
    })

    return list
  }

  async createListMember(data: CreateListMemberData) {
    const list = await this.create({
      data,
    })

    return list
  }

  async findByTitle(data: FindByTitle) {
    const list = await db.queryRow({
      sql: `SELECT *
                FROM list
               WHERE id = ?`,
      values: [data],
    })

    return list
  }
}
