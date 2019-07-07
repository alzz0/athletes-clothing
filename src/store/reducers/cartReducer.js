const initState = { hidden: true };
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
export default cartReducer;
