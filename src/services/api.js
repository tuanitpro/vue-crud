import axios from 'axios';
const baseURL = 'http://localhost:5002/api/v2';
export const API = {
  get(params) {
    return new Promise((resolve, reject) => {
      const config = params.options ? params.options : {};
      return axios
        .get(baseURL + params.url, config)
        .then(response => {
          if (response.status === 200) {
            if (params.processData) {
              const data = params.processData(response.data);
              resolve(data);
            } else {
              resolve(response.data);
            }
          } else {
            reject(response.err);
          }
        })
        .catch(err => reject(err));
    });
  },
  post(params) {
    return new Promise((resolve, reject) => {
      const config = params.options ? params.options : {};
      return axios
        .post(baseURL + params.url, config)
        .then(response => {
          if (response.status === 200) {
            if (params.processData) {
              const data = params.processData(response.data);
              resolve(data);
            } else {
              resolve(response.data);
            }
          } else {
            reject(response.err);
          }
        })
        .catch(err => reject(err));
    });
  },
  put(params) {
    return new Promise((resolve, reject) => {
      const config = params.options ? params.options : {};
      return axios
        .put(params.url, config)
        .then(response => {
          if (response.status === 200) {
            if (params.processData) {
              const data = params.processData(response.data);
              resolve(data);
            } else {
              resolve(response.data);
            }
          } else {
            reject(response.err);
          }
        })
        .catch(err => reject(err));
    });
  },
  delete(params) {
    return new Promise((resolve, reject) => {
      return axios
        .delete(baseURL + params.url + '/' + params.options)
        .then(response => {
          if (response.status === 200) {
            if (params.processData) {
              const data = params.processData(response.data);
              resolve(data);
            } else {
              resolve(response.data);
            }
          } else {
            reject(response.err);
          }
        })
        .catch(err => reject(err));
    });
  }
};
