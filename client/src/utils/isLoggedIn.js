import { store } from '../redux/store';

export const isLoggedIn = () => {
  return store.getState().user.token ? true : false;
};