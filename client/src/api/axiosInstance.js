import axios from 'axios';
import { store } from '../redux/store';

const setAuthHeaderValue = () => {
  return `Bearer ${store.getState().user.token}`;
};

const axiosInstance = axios.create(
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: setAuthHeaderValue(),
    },
  }
);

axiosInstance.interceptors.request.use(
  (request) => {
    if (store.getState().user.token) {
      request.headers.Authorization = setAuthHeaderValue();
    }

    return request;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;