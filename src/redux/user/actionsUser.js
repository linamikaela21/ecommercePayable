import { USER_ACTIONS_CONSTANT } from './constantsUser';

export const googleSignInStart = () => ({
  type: USER_ACTIONS_CONSTANT.SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: USER_ACTIONS_CONSTANT.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: USER_ACTIONS_CONSTANT.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: USER_ACTIONS_CONSTANT.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const checkUserSession = () => ({
  type: USER_ACTIONS_CONSTANT.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: USER_ACTIONS_CONSTANT.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: USER_ACTIONS_CONSTANT.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: USER_ACTIONS_CONSTANT.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: USER_ACTIONS_CONSTANT.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, data }) => ({
  type: USER_ACTIONS_CONSTANT.SIGN_UP_SUCCESS,
  payload: { user, data },
});

export const signUpFailure = (error) => ({
  type: USER_ACTIONS_CONSTANT.SIGN_UP_FAILURE,
  payload: error,
});
