import { NoormListRepository } from '../../repository/implementions/noorm-list-repository'
import { ListServices } from '../list-services'

export function makeListMemberService() {
  const listRepository = new NoormListRepository({
    tableName: 'list_member',
  })

  return new ListServices(listRepository)
}
