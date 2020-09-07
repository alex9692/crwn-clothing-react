import { CartActionTypes } from "./cart-types";
import { addItemToCart, subtractItemFromCart } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CARTDROPDOWN:
      return {
        ...state,
        hidden: action.payload,
      };

    case CartActionTypes.ADD_ITEM:
      console.log(action);
      return {
        ...state,
        cartItems: addItemToCart([...state.cartItems], action.payload),
      };

    case CartActionTypes.REMOVE_ITEM:
      const updateCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updateCartItems,
      };

    case CartActionTypes.SUBTRACT_ITEM:
      return {
        ...state,
        cartItems: subtractItemFromCart([...state.cartItems], action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
