
export default {
  GET_LIST_CUSTOMER: (state, params) => {
    state.isLoading = true
    state.customerParams = params
    state.customerDataSource = []
  },
  GET_LIST_CUSTOMER_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customerDataSource = Object.freeze(data)
  },
  GET_LIST_CUSTOMER_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerDataSource = []
  },

  GET_LIST_CUSTOMER_PAGING: (state, params) => {
    state.isLoading = true
    state.customerParams = params
    state.customerDataSourcePaging = {}
  },
  GET_LIST_CUSTOMER_PAGING_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customerDataSourcePaging = Object.freeze(data)
  },
  GET_LIST_CUSTOMER_PAGING_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerDataSource = {}
  },

  GET_CUSTOMER: (state, params) => {
    state.isLoading = true
    state.customerParams = params
    state.customerModel = {}
  },
  GET_CUSTOMER_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customer = Object.freeze(data)
  },
  GET_CUSTOMER_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerModel = {}
  },

  CREATE_CUSTOMER: (state, params) => {
    state.isLoading = true
    state.customerParams = params
    state.customerModel = {}
  },
  CREATE_CUSTOMER_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customer = Object.freeze(data)
  },
  CREATE_CUSTOMER_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerModel = []
  },

  UPDATE_CUSTOMER: (state, params) => {
    state.isLoading = true
    state.customerParams = params
    state.customerModel = {}
  },
  UPDATE_CUSTOMER_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customer = Object.freeze(data)
  },
  UPDATE_CUSTOMER_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerModel = []
  },

  COPY_CUSTOMER: (state, params) => {
    state.isLoading = true
    state.customerParams = params
  },
  COPY_CUSTOMER_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customerModel = {}
  },
  COPY_CUSTOMER_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerModel = { }
  },

  PUBLISH_CUSTOMER: (state, params) => {
    state.isLoading = true
    state.customerParams = params
    state.customer = {}
  },
  PUBLISH_CUSTOMER_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customer = Object.freeze(data)
  },
  PUBLISH_CUSTOMER_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerModel = []
  },

  ARCHIVE_CUSTOMER: (state, params) => {
    state.isLoading = true
    state.customerParams = params
    state.customer = {}
  },
  ARCHIVE_CUSTOMER_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customer = Object.freeze(data)
  },
  ARCHIVE_CUSTOMER_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerModel = []
  },

  DELETE_CUSTOMER: (state, params) => {
    state.isLoading = true
    state.customerParams = params
    state.customer = {}
  },
  DELETE_CUSTOMER_SUCCESS: (state, data) => {
    state.isLoading = false
    state.customer = Object.freeze(data)
  },
  DELETE_CUSTOMER_FAILED: (state, err) => {
    state.isLoading = false
    state.responseResult = err
    state.customerModel = []
  }
}
