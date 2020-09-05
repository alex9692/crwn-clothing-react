import { CartActionTypes } from "./cart-types";

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
      const cartItems = [...state.cartItems];
      const itemExist = cartItems.find((item) => item.id === action.payload.id);

      if (itemExist) {
        const itemIndex = cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        cartItems[itemIndex].quantity += 1;
      } else {
        cartItems.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        cartItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
