import { combineReducers } from 'redux';
import userReducer from '../user/reducerUser';
import cartReducer from '../cart/reducerCart';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
