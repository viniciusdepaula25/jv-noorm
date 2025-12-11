import { db } from 'src/db/database'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import {
  ListRepository,
  CreateListData,
  CreateListMemberData,
  GetAllListData,
  UpdateListData,
  GetListData,
  DeleteListData,
  // GetListMemberData,
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

  async getList(data: GetListData) {
    const list = await db.queryRow({
      sql: ` SELECT ls.id, ls.title
               FROM list ls
              WHERE id = ?
                AND deleted_at IS NULL`,
      values: [data.id],
    })

    return list
  }

  async getAllList(data: GetAllListData) {
    const list = await db.queryRows({
      sql: ` SELECT ls.id, ls.title, lm.user_id, lm.role
               FROM list ls
               JOIN list_member lm ON ls.id = lm.list_id
              WHERE (ls.owner_id = ?
                 OR lm.user_id = ?)
                AND ls.deleted_at IS NULL`,
      values: [data.owner_id, data.user_id],
    })

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

  // async deleteList(data: DeleteListData) {
  //   const list = await db.delete({
  //     command: ` DELETE FROM list WHERE id = ?`,
  //     values: [data.id],
  //     options: {
  //       softDelete: true,
  //     },
  //   })

  //   return list
  // }

  async deleteList(data: DeleteListData) {
    await db.update({
      command: ` UPDATE list
                    SET deleted_at = NOW()
                  WHERE id = ?`,
      values: [data.id],
    })

    await db.update({
      command: `UPDATE list_member
                   SET deleted_at = NOW()
                 WHERE list_id = ?`,
      values: [data.id],
    })
  }
}
