import React from "react";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const cartIcon = ({ toggleCartDropdown, hidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartDropdown(!hidden)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const matchStateToProps = (state) => {
  return {
    hidden: state.cart.hidden,
    itemCount: selectCartItemsCount(state),
  };
};

const matchDispatchToProps = (dispatch) => ({
  toggleCartDropdown: (toggleState) =>
    dispatch(toggleCartDropdown(toggleState)),
});

export default connect(matchStateToProps, matchDispatchToProps)(cartIcon);
