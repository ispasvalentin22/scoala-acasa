import axios from 'axios';
import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from './user.types';
import { ADD_ERRORS, CLEAR_ERRORS } from '../error/error.types';

export const userRegister = ({ email, password }) => async (dispatch) => {
  try {
    await axios.post('/api/users/signup', {
      email,
      password,
    });
    dispatch({
      type: USER_REGISTER,
    });
  } catch (err) {
    dispatch({
      type: ADD_ERRORS,
      payload: {
        errors: err,
      },
    });
  }
};

export const userLogin = ({ email, password }) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/login' , {
      email,
      password,
    });
    if (res) {
      dispatch({
        type: CLEAR_ERRORS,
        payload: {
          errors: null,
        },
      });
      dispatch({
        type: USER_LOGIN,
        payload: {
          token: res.data.token,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_ERRORS,
      payload: {
        errors: err.message,
      },
    });
  }
};