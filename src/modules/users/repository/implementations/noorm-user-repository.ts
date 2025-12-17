import { db } from 'src/db/database'
import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

import {
  CreateUserData,
  UpdateUserData,
  UserRepository,
} from '../user-repository'

export class NoormUserRepository
  extends TesteBasicCrud
  implements UserRepository
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

  async createUser(data: CreateUserData) {
    const user = await this.create({
      data,
    })

    return user
  }

  async updateUser(data: UpdateUserData) {
    const user = await this.update({
      key: data.id,
      data,
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await db.queryRow({
      sql: ` SELECT u.*
               FROM users u
              WHERE email = ?
                AND deleted_at IS NULL`,
      values: [email],
    })

    return user
  }

  async findById(id: string) {
    const user = await db.queryRow({
      sql: `   SELECT u.id, 
                      u.name, 
                      u.email
                 FROM users u
                WHERE id = ?
                  AND deleted_at IS NULL`,
      values: [id],
    })

    return user
  }

  async findByLogin(email: string) {
    const user = await db.queryRow({
      sql: `  SELECT u.id,
                     u.name,
                     u.email,
                     u.password
                FROM users u
               WHERE email = ?
                 AND deleted_at IS NULL`,
      values: [email],
    })

    return user
  }

  async deleteUser(id: string) {
    await this.delete({
      key: id,
      options: {
        softDelete: true,
      },
    })
  }
}
