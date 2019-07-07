import React from "react";
import "./CartDropDown.scss";
import CustomButton from "../customButton/CustomButton";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div class="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
export default CartDropDown;
