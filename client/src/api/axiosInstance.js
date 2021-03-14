import axios from 'axios';
import { store } from '../redux/store';

const setAuthHeaderValue = () => {
  return `Bearer ${store.getState().user.token}`;
};

const axiosInstance = axios.create(
  { baseURL: 'localhost:4000' },
  {
    Headers: {
      'Content-type': 'Application/json',
      Authorization: setAuthHeaderValue(),
    },
  }
);

export default axiosInstance;