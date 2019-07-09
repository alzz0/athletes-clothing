import React from "react";

import "./cartItem.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div class="item-details">
      <span className="name">{name}</span>
      <span class="price">
        {quantity}x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
