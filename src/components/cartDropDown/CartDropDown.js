import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
import "./CartDropDown.scss";
import { toggleCartHidden } from "../../store/actions/cartActions";
import CustomButton from "../customButton/CustomButton";

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {cartItems.length ? (
      cartItems.map(cartItem => {
        return <CartItem key ={cartItem.id}item={cartItem} />;
      })
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}

    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropDown)
);
