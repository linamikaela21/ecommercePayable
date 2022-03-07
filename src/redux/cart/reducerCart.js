import { CART_ACTIONS_CONSTANT } from './constantsCart';
import { addItemToCart, removeItemFromCart } from './utilsCart';

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ACTIONS_CONSTANT.CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case CART_ACTIONS_CONSTANT.ADD_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CART_ACTIONS_CONSTANT.REMOVE_ALL_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CART_ACTIONS_CONSTANT.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
