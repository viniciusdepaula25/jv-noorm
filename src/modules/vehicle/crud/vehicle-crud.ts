import { TesteBasicCrud } from 'src/shared/noorm/TesteCrud'

export class VehicleCrud extends TesteBasicCrud {
  public constructor() {
    super({
      tableName: 'veiculo',
    })
  }
}
