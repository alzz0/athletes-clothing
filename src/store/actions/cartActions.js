export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN"
});

export const addItem = item => ({
  type: "ADD_ITEM",
  item: item
});
export const decrementItem=item=>({
    type:"DECREMENT_ITEM",
    item:item
})

export const  removeItem = item => ({
  type: "REMOVE_ITEM",
  item: item
});
