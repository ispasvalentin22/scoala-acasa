import { ADD_ERRORS, CLEAR_ERRORS } from './error.types';

const INITIAL_STATE = {
  errors: null,
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default errorReducer;