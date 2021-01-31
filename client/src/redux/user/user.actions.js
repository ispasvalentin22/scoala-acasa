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

export const userLogin = ({ email, password }) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/login' , {
      email,
      password,
    });
    if (res) {
      dispatch({
        type: UserActionTypes.USER_LOGIN,
        payload: {
          token: res.token,
        },
      });
      console.log(res.token);
    }
  } catch (err) {
    console.log(err);
  }
}