import React from "react";
import "./cartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../store/actions/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
};
const mapStateToProps = state => {
  return {
itemCount: state.cart.cartItems.reduce(
  (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
  0
)

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
