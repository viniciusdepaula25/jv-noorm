import { db } from 'src/db/database'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import {
  ListRepository,
  CreateListData,
  CreateListMemberData,
  GetAllListData,
  UpdateListData,
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

  async getList(listId: string) {
    const list = await db.queryRow({
      sql: ` SELECT ls.id, ls.title, ls.owner_id
               FROM list ls
              WHERE id = ?
                AND deleted_at IS NULL`,
      values: [listId],
    })

    return list
  }

  async getAllList(data: GetAllListData) {
    const list = await db.queryRows({
      sql: ` SELECT ls.id, 
                    ls.title
               FROM list ls
               JOIN list_member lm ON ls.id = lm.list_id
              WHERE lm.deleted_at IS NULL
                AND ls.owner_id = ?
                 OR lm.user_id = ?`,
      values: [data.owner_id, data.user_id],
    })
    // SELECT ls.id,
    //        ls.title
    //   FROM list ls
    //   JOIN list_member lm ON ls.id = lm.list_id
    //  WHERE ls.owner_id = '1f6f004e-cc8c-11f0-8dc2-d413e233571e'
    //     OR lm.user_id = '1f6f004e-cc8c-11f0-8dc2-d413e233571e'
    //    AND lm.deleted_at IS NULL
    return list
  }

  async updateList(data: UpdateListData) {
    const list = await db.update({
      command: `UPDATE list
                   SET title = ?
                 WHERE id = ?`,
      values: [data.title, data.id],
    })

    return list
  }

  async deleteList(id: string) {
    await db.update({
      command: ` UPDATE list
                    SET deleted_at = NOW()
                  WHERE id = ?`,
      values: [id],
    })

    await db.update({
      command: `UPDATE list_member
                   SET deleted_at = NOW()
                 WHERE list_id = ?`,
      values: [id],
    })
  }
}
