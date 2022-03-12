import { takeLatest, call, put, all } from 'redux-saga/effects';
import { SHOP_ACTIONS_CONSTANT } from './constansShop';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../Firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './actionsShop';

export function* fetchCollectionStartAsync() {
  try {
    const collectionRef = firestore.collection('collection');
    const snap = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snap);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    SHOP_ACTIONS_CONSTANT.FETCH_COLLECTION_START,
    fetchCollectionStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
