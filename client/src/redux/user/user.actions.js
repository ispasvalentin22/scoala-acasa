import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
  USER_GET_INFO,
  USER_CREATE_CLASS,
} from './user.types';
import { ADD_ERRORS, CLEAR_ERRORS } from '../error/error.types';
import axiosInstance from '../../api/axiosInstance';

export const userRegister =
  ({ email, password, name, role }) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.post('/api/users/signup', {
        name,
        email,
        role,
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

export const userLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.post('/api/users/login', {
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
      name: null,
    },
  });
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/api/users/currentuser');
    if (response) {
      dispatch({
        type: USER_GET_INFO,
        payload: {
          name: response.data.name,
          email: response.data.email,
          role: response.data.role,
          class: response.data.class,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_ERRORS,
      payload: {
        // errors: err.response.data.message,
      },
    });
  }
};

export const userCreateClass =
  ({ name, currentUser }) =>
  async (dispatch) => {
    try {
      const response = await axiosInstance.post('/api/classes', {
        name,
        currentUser,
      });
      if (response) {
        dispatch({
          type: CLEAR_ERRORS,
          payload: {
            errors: null,
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
