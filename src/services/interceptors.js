import axios from 'axios';
import router from '../router';
import TOKEN from './token';
const interceptors = () => {
  axios.interceptors.request.use(
    requestConfig => {
      const token = TOKEN;
      if (token) {
        requestConfig.headers.Authorization = token;
      }
      return requestConfig;
    },
    requestError => {
      return Promise.reject(requestError);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    response => {
      return Promise.resolve(response);
    },
    error => {
      if (error.response.status === 401) {
        router.push('/unauth');
      }
      return Promise.reject(error);
    }
  );
};
const Interceptors = interceptors;
export default Interceptors;
