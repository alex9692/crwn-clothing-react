import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart-selector";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const cartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(({ id, ...otherProps }) => {
          return <CartItem key={id} {...otherProps} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const matchStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(matchStateToProps)(cartDropdown);
