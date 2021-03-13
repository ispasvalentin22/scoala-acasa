import axios from 'axios';
import { USER_REGISTER, USER_LOGIN, USER_LOGOUT, USER_GET_INFO } from './user.types';
import { ADD_ERRORS, CLEAR_ERRORS } from '../error/error.types';

export const userRegister = ({ email, password }) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/signup', {
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
        type: USER_REGISTER,
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_ERRORS,
      payload: {
        errors: err.response.data.message,
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
          email: res.data.data.user.email,
          token: res.data.token,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_ERRORS,
      payload: {
        errors: err.response.data.message,
      },
    });
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
    payload: {
      token: null,
      email: null,
      role: null,
    },
  });
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/users/currentuser');
    if (response) {
      console.log(response);
      dispatch({
        type: USER_GET_INFO,
        payload: {
          name: response.data.user.name,
          email: response.data.user.email,
        }
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_ERRORS,
      payload: {
        errors: err.response.data.message,
      },
    });
  }
};
