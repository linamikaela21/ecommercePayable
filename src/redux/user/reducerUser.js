import { USER_ACTIONS_CONSTANT } from './constantsUser';

const initialState = {
  user: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS_CONSTANT.SIGN_IN_SUCCESS:
      return { ...state, error: null, user: action.payload };

    case USER_ACTIONS_CONSTANT.SIGN_OUT_SUCCESS:
      return { ...state, error: null, user: null };

    case USER_ACTIONS_CONSTANT.SIGN_IN_FAILURE:
    case USER_ACTIONS_CONSTANT.SIGN_OUT_FAILURE:
    case USER_ACTIONS_CONSTANT.SIGN_UP_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
