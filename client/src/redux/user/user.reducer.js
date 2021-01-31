import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from './user.types';

const INITIAL_STATE = {
  email: '',
  role: '',
  token: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
      };

    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
      };

    case USER_LOGOUT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
