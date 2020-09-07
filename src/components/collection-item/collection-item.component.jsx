import React from "react";
import { connect } from "react-redux";

import { ADD_ITEM_TO_CART } from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const collectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(ADD_ITEM_TO_CART(item)),
});

export default connect(null, mapDispatchToProps)(collectionItem);
