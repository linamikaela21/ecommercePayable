import { takeLatest, put, call, all } from 'redux-saga/effects';
import { USER_ACTIONS_CONSTANT } from './constantsUser';
import {
  auth,
  googleProvider,
  createUserProfileDoc,
  getCurrentUser,
} from '../../Firebase/firebase.utils';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './actionsUser';

export function* getSnapshotFromUserAuth(user, data) {
  try {
    const userRef = yield call(createUserProfileDoc, user, data);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure, error);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTIONS_CONSTANT.SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure, error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTIONS_CONSTANT.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(
    USER_ACTIONS_CONSTANT.CHECK_USER_SESSION,
    isUserAuthenticated
  );
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, data: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, data } }) {
  yield getSnapshotFromUserAuth(user, data);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTIONS_CONSTANT.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTIONS_CONSTANT.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTIONS_CONSTANT.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
