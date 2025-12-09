import { db } from 'src/db/database'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import {
  ListRepository,
  CreateListData,
  CreateListMemberData,
  GetList,
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

  async getList(data: GetList) {
    const lists = await db.queryRows({
      sql: ` SELECT ls.*
               FROM list ls
               JOIN list_member lm ON ls.id = lm.list_id
              WHERE (ls.owner_id = ?
                 OR lm.user_id = ?)
                AND ls.deleted_at IS NULL`,
      values: [data.owner_id, data.user_id],
    })

    return lists
  }
}
