import { USER_ACTIONS_CONSTANT } from './constantsUser';

export const setActualUser = (user) => ({
  type: USER_ACTIONS_CONSTANT.SET_CURRENT_USER,
  payload: user,
});
