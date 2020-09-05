import { CartActionTypes } from "./cart-types";

export const toggleCartDropdown = (toggleState) => {
  return {
    type: CartActionTypes.TOGGLE_CARTDROPDOWN,
    payload: toggleState,
  };
};

export const addItemToCart = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};
