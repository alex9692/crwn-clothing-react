import { CartActionTypes } from "./cart-types";

export const TOGGLE_CART_DROPDOWN = (toggleState) => {
  return {
    type: CartActionTypes.TOGGLE_CARTDROPDOWN,
    payload: toggleState,
  };
};

export const ADD_ITEM_TO_CART = (item) => {
  console.log("add");
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const REMOVE_ITEM_FROM_CART = (itemId) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: itemId,
  };
};

export const SUBTRACT_ITEM_FROM_CART = (item) => {
  console.log("subtract");
  return {
    type: CartActionTypes.SUBTRACT_ITEM,
    payload: item,
  };
};
