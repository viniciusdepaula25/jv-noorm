import { NoormListRepository } from '../../repository/implementions/noorm-list-repository'
import { ListServices } from '../list-services'

export function makeListService() {
  const ListRepository = new NoormListRepository({
    tableName: 'list',
  })

  return new ListServices(ListRepository)
}
