import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import "./CartDropDown.scss";
import CustomButton from "../customButton/CustomButton";

const CartDropDown = ( {cartItems} ) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
{
    cartItems.map(cartItem=>{
        return <CartItem item={cartItem}/>
    })
}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};
export default connect(mapStateToProps)(CartDropDown);
