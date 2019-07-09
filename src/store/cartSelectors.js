import {createSelector}from "reselect"

const selectCart=state=>state.clear

export const selectCartItems=createSelector(
[selectCart],
    (cart)=>cart.cartItems
)
      export const selectCartItemsCount=createSelector(
      [selectCartItems],
          cartItems=>
          cartItems.reduce(
              (accualatedQuantity,cartItem)=>
              accualatedQuantity+cartItem.quantity,0
          )
      )