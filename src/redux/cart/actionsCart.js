import { CART_ACTIONS_CONSTANT } from './constantsCart';

export const cartHidden = () => ({
  type: CART_ACTIONS_CONSTANT.CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: CART_ACTIONS_CONSTANT.ADD_ITEM_FROM_CART,
  payload: item,
});

export const removeAllItemFromCart = (item) => ({
  type: CART_ACTIONS_CONSTANT.REMOVE_ALL_ITEM_FROM_CART,
  payload: item,
});

export const deleteItemFromCart = (item) => ({
  type: CART_ACTIONS_CONSTANT.DELETE_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CART_ACTIONS_CONSTANT.CLEAR_CART,
});
