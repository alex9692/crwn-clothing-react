import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart-selector";

import { TOGGLE_CART_DROPDOWN } from "../../redux/cart/cart-actions";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const cartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(({ id, ...otherProps }) => {
            return <CartItem key={id} {...otherProps} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(TOGGLE_CART_DROPDOWN(true));
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(cartDropdown));
