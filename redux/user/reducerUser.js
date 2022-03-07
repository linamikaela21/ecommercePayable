import { USER_ACTIONS_CONSTANT } from './constantsUser';

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS_CONSTANT.SET_CURRENT_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default userReducer;
