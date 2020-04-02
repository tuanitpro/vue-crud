import {
  actions
} from './actions/actionTodos'
import mutations from './mutations'
import getters from './getters'

const customerState = {
  isLoading: true,
  customerParams: {},
  customerModel: {},
  customerDataSource: [],
  customerDataSourcePaging: {},
  responseResult: {}
}

export default {
  namespaced: true,
  state: customerState,
  mutations: mutations,
  actions: actions,
  getters: getters
}
