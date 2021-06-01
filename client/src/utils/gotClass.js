import { store } from '../redux/store';

export const gotClass = () => {
  return store.getState().user.class ? true : false;
};
