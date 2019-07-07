import React from "react";
import "./cartIcon.scss"
import {connect}from "react-redux"
import {toggleCartHidden}from "../../store/actions/cartActions"
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
const CartIcon = ({toggleCartHidden}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps=dispatch=>{
    return{
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }
}
export default connect(null,mapDispatchToProps)(CartIcon);
