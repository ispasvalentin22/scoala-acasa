import axios from 'axios';
import { UserActionTypes } from './user.types';

export const userRegister = ({ email, password }) => async (dispatch) => {
  await axios.post('/api/users/signup', {
    email,
    password,
  });
  dispatch({
    type: UserActionTypes.USER_REGISTER,
  })
}