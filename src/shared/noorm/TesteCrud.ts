import { BasicCrud } from 'jv-noorm'
import { db } from 'src/db/database'
// import { express_io } from '../../express';

export class TesteBasicCrud extends BasicCrud {
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
      db,
    })
  }

  public messageForDBNotConnectedError(): string {
    return 'O Banco de Dados não está conectado.'
  }

  public messageForDBMetadataNotLoadedError(): string {
    return 'Os metadados do banco de dados não foram carregados.'
  }

  public messageForBadPrimaryKeyFormatError(): string {
    return 'A chave primária está mal formatada.'
  }

  public messageForTableDoesNotExistsError(tableName: string): string {
    return `A tabela '${tableName}' não existe.`
  }

  public messageForInvalidMetadataError(
    key: string,
    tableName: string,
  ): string {
    return `O campo '${key}' não existe na tabela '${tableName}'.`
  }

  public messageForConstraintError(tableName: string): string {
    return `Este registro está em uso na tabela '${tableName}'.`
  }

  public messageForInvalidDropdownConfigError(missingField: string): string {
    return `O campo de ${
      missingField === 'key' ? 'índice' : 'detalhes'
    } não está definido para listas suspensas.`
  }

  public messageForMissingFieldError(columnName: string): string {
    return `O campo '${columnName}' é obrigatório.`
  }

  public messageForFieldSizeExcedeedError(
    columnName: string,
    maxSize: number,
  ): string {
    return `O tamanho máximo permitido para o campo '${columnName}' é de ${maxSize} caracteres.`
  }

  public messageForValueDoesNotExistsOnParentError(
    value: string,
    tableName: string,
  ): string {
    return `O valor '${value}' não existe na tabela '${tableName}'.`
  }

  public messageForValueAlreadyExistsOnParentError(
    value: string,
    columnName: string,
  ): string {
    return `O valor '${value}' já existe no campo '${columnName}'.`
  }
}
