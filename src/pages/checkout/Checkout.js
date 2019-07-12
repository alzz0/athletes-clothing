import React from "react";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import { connect } from "react-redux";
import StripeButton from "./../../components/stripeButton/StripeButton";
import "./checkout.scss";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <span className="total">TOTAL: ${total}</span>
    <div class="test-warning">
        *Please use the following test credit card for payment*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    {total > 0 && <StripeButton price={total} />}
  </div>
);
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    total: state.cart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
  };
};

export default connect(mapStateToProps)(Checkout);
