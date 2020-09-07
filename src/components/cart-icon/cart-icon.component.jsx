import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { TOGGLE_CART_DROPDOWN } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";
import { selectCartHidden } from "../../redux/cart/cart-selector";

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

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: (toggleState) =>
    dispatch(TOGGLE_CART_DROPDOWN(toggleState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
