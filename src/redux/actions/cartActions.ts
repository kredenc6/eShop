import { CollectionItemType } from "../../types/stateTypes"
import CartActionTypes, { ADD_TO_CART, DECREASE_ITEM_QUANTITY, INCREASE_ITEM_QUANTITY, REMOVE_FROM_CART , TOGGLE_CART_VISIBILITY} from "./cartActionTypes"

export const addToCart = (item: CollectionItemType): CartActionTypes => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export const removeFromCart = (id: number): CartActionTypes => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}

export const increaseItemQuantity = (id: number): CartActionTypes => {
  return {
    type: INCREASE_ITEM_QUANTITY,
    payload: id
  }
}

export const decreaseItemQuantity = (id: number): CartActionTypes => {
  return {
    type: DECREASE_ITEM_QUANTITY,
    payload: id
  }
}

export const toggleCartVisibility = (): CartActionTypes => {
  return {
    type: TOGGLE_CART_VISIBILITY
  }
}
