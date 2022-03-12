import { SHOP_ACTIONS_CONSTANT } from './constansShop';

export const fetchCollectionStart = () => ({
  type: SHOP_ACTIONS_CONSTANT.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: SHOP_ACTIONS_CONSTANT.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionFailure = (error) => ({
  type: SHOP_ACTIONS_CONSTANT.FETCH_COLLECTION_FAILURE,
  payload: error,
});
