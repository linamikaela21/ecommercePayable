import { SHOP_ACTIONS_CONSTANT } from './constansShop';

const initialState = {
  collections: null,
  isFetching: false,
  errorMsg: undefined,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOP_ACTIONS_CONSTANT.FETCH_COLLECTION_START:
      return { ...state, isFetching: true };
    case SHOP_ACTIONS_CONSTANT.FETCH_COLLECTION_SUCCESS:
      return { ...state, isFetching: false, collections: action.payload };
    case SHOP_ACTIONS_CONSTANT.FETCH_COLLECTION_FAILURE:
      return { ...state, isFetching: false, errorMsg: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
