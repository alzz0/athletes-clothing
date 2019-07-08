import {addItemToCart} from "../cartUtils";
const initState = { hidden: true, cartItems: [] };

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems:addItemToCart(state.cartItems,action.item)
      };
    default:
      return state;
  }
};
export default cartReducer;
