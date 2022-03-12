import { takeLatest, put, call, all } from 'redux-saga/effects';
import { clearCart } from './actionsCart';
import { USER_ACTIONS_CONSTANT } from '../user/constantsUser';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(USER_ACTIONS_CONSTANT.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
