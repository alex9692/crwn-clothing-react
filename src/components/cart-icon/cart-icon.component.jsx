import React from "react";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/cart-actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const cartIcon = ({ toggleCartDropdown, hidden }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartDropdown(!hidden)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const matchStateToProps = (state) => {
  return {
    hidden: state.cart.hidden,
  };
};

const matchDispatchToProps = (dispatch) => ({
  toggleCartDropdown: (toggleState) =>
    dispatch(toggleCartDropdown(toggleState)),
});

export default connect(matchStateToProps, matchDispatchToProps)(cartIcon);
