import axios from 'axios';
import { store } from '../redux/store';

const setAuthHeaderValue = () => {
  return `Bearer ${store.getState().user.token}`;
};

const axiosInstance = axios.create(
  { baseURL: 'http://localhost:4000' },
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: setAuthHeaderValue(),
    },
  }
);

export default axiosInstance;