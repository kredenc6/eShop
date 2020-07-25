import { createSelector } from "reselect"
import { RootReducer } from "../reducers/rootReducer"

const getCartItems = ({ cart }: RootReducer) => cart.cartItems
const getIsCartVisible = ({ cart }: RootReducer) => cart.isVisible

export const cartItemCountSelector = createSelector(
  getCartItems,
  cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
)

export const cartItemsSelector = createSelector(
  getCartItems,
  cartItems => cartItems
)

export const isCartVisibleSelector = createSelector(
  getIsCartVisible,
  isCartVisible => isCartVisible
)
