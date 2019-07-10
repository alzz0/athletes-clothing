import { addItemToCart,decrementItemFromCart } from "../cartUtils";
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
        cartItems: addItemToCart(state.cartItems, action.item)
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.item.id
        )
          
      };
      case "DECREMENT_ITEM":
          return {
              ...state,
              cartItems:decrementItemFromCart(state.cartItems,action.item)
          }
    default:
      return state;
  }
};
export default cartReducer;
