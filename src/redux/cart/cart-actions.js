import { CartActionTypes } from "./cart-types";

export const toggleCartDropdown = (toggleState) => {
  return {
    type: CartActionTypes.TOGGLE_CARTDROPDOWN,
    payload: toggleState,
  };
};
