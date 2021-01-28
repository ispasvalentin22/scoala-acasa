import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  email: '',
  role: '',
} 

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REGISTER:
      return {
        ...state,
      };

    case UserActionTypes.USER_LOGIN:
      return {
        ...state,
      };

    case UserActionTypes.USER_LOGOUT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;