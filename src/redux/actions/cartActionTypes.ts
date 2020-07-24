import { CollectionItemType } from "../../initialValues/shopData"

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY"
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY"
export const TOGGLE_CART_VISIBILITY = "TOGGLE_CART_VISIBILITY"

export interface CartItem extends CollectionItemType {
  quantity: number
}

type AddToCart = {
  type: typeof ADD_TO_CART,
  payload: CollectionItemType
}

type RemoveFromCart = {
  type: typeof REMOVE_FROM_CART,
  payload: number
}

type IncreaseItemCount = {
  type: typeof INCREASE_ITEM_QUANTITY,
  payload: number
}

type DecreaseItemCount = {
  type: typeof DECREASE_ITEM_QUANTITY,
  payload: number
}

type ToggleCartVisibility = {
  type: typeof TOGGLE_CART_VISIBILITY
}

type CartActionTypes = AddToCart | RemoveFromCart | IncreaseItemCount | DecreaseItemCount | ToggleCartVisibility
export default CartActionTypes