import axios from 'axios'

export const API = {
  get(params) {
    return new Promise((resolve, reject) => {
      const config = params.options ? params.options : {}
      return axios.get(params.url, config).then(response => {
        if (response.status === 200) {
          if (params.processData) {
            const data = params.processData(response.data)
            resolve(data)
          } else {
            resolve(response.data)
          }
        } else {
          reject(response.err)
        }
      }).catch(err => reject(err))
    })
  },
  post(params) {
    return new Promise((resolve, reject) => {
      const config = params.options ? params.options : {}
      return axios.post(params.url, config).then(response => {
        if (response.status === 200) {
          if (params.processData) {
            const data = params.processData(response.data)
            resolve(data)
          } else {
            resolve(response.data)
          }
        } else {
          reject(response.err)
        }
      }).catch(err => reject(err))
    })
  }
}
