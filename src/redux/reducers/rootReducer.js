import { combineReducers } from 'redux';
import userReducer from '../user/reducerUser';
import cartReducer from '../cart/reducerCart';
import shopReducer from '../shop/reducerShop';
import directoryReducer from '../directory/reducerDirectory';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
