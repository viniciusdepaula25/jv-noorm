import { db } from 'src/db/database'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import {
  CreateMemberData,
  DeleteMember,
  MemberRepository,
} from '../member-repository'

export class NoormMemberRepository
  extends TesteBasicCrud
  implements MemberRepository
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

  async createMember(data: CreateMemberData) {
    const member = await this.create({ data })

    return member
  }

  async deleteMember(data: DeleteMember) {
    await db.update({
      command: `UPDATE list_member
                   SET deleted_at = NOW()
                 WHERE user_id = ?`,
      values: [data],
    })
  }

  async findAll(id: string) {
    const member = await db.queryRows({
      sql: `SELECT us.id,
                        us.name,
                        us.email
                   FROM users us
                   JOIN list_member lm ON us.id = lm.user_id
                  WHERE lm.list_id = ?
                    AND lm.deleted_at IS NULL`,
      values: [id],
    })

    return member
  }
}
