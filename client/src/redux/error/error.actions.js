import { CLEAR_ERRORS } from './error.types';

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};