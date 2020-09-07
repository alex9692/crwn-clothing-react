import React from "react";
import { connect } from "react-redux";

import {
  REMOVE_ITEM_FROM_CART,
  ADD_ITEM_TO_CART,
  SUBTRACT_ITEM_FROM_CART,
} from "../../redux/cart/cart-actions";

import "./checkout-item.styles.scss";

const checkoutItem = ({ cartItem, removeItem, addItem, subtractItem }) => {
  const { id, name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subtractItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(REMOVE_ITEM_FROM_CART(id)),
  addItem: (item) => dispatch(ADD_ITEM_TO_CART(item)),
  subtractItem: (item) => dispatch(SUBTRACT_ITEM_FROM_CART(item)),
});

export default connect(null, mapDispatchToProps)(checkoutItem);
