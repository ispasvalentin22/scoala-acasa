import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
  USER_GET_INFO,
  USER_GET_CLASS,
} from './user.types';

const INITIAL_STATE = {
  name: '',
  email: '',
  role: '',
  gotClass: '',
  token: '',
  currentClass: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
      };

    case USER_LOGIN:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };

    case USER_LOGOUT:
      return {
        ...state,
        email: action.payload.email,
        role: action.payload.role,
        token: action.payload.token,
        name: action.payload.name,
      };

    case USER_GET_INFO:
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        class: action.payload.class,
        email: action.payload.email,
      };

    case USER_GET_CLASS:
      return {
        ...state,
        currentClass: action.payload.currentClass
      };

    default:
      return state;
  }
};

export default userReducer;
