import { db } from 'src/db/database'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import {
  CreateMemberData,
  DeleteMemberData,
  GetRoleData,
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

  async deleteMember(data: DeleteMemberData) {
    await db.update({
      command: `UPDATE list_member
                   SET deleted_at = NOW()
                 WHERE user_id = ?
                   AND list_id = ?
                   AND deleted_at IS NULL`,
      values: [data.user_id, data.list_id],
    })
  }

  async findAll(id: string) {
    const member = await db.queryRows({
      sql: `SELECT us.id,
                   us.name,
                   us.email,
                   lm.role
              FROM users us
              JOIN list_member lm ON us.id = lm.user_id
             WHERE lm.list_id = ?
               AND lm.deleted_at IS NULL`,
      values: [id],
    })

    return member
  }

  async getRole(data: GetRoleData) {
    const member = await db.queryRow({
      sql: `SELECT lm.role,
                   lm.deleted_at
              FROM list_member lm
             WHERE lm.list_id = ?
               AND lm.user_id = ?
               AND lm.deleted_at IS NULL`,
      values: [data.list_id, data.user_id],
    })

    return member
  }
}
