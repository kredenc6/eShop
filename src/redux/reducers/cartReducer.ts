import { CartItem } from "../actions/cartActionTypes"
import CartActionTypes from "../actions/cartActionTypes"

const initialState = {
  cartItems: [] as CartItem[],
  isVisible: false
}

const cartReducer = (state = initialState, action: CartActionTypes) => {
  const { cartItems, isVisible } = state
  switch(action.type) {
    case "ADD_TO_CART": {
      const { id: newItemId } = action.payload
      const isNewItemInTheCart = cartItems.some(cartItem => cartItem.id === newItemId)
      if(!isNewItemInTheCart) {
        return { ...state, cartItems: [...cartItems, { ...action.payload, quantity: 1 }] }
      }

      const updatedCartItems = cartItems.map(cartItem => {
        return cartItem.id === newItemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      })

      return { ...state, cartItems: updatedCartItems }
    }
    
    case "REMOVE_FROM_CART": {
      const updatedCartItems = cartItems.filter(({ id }) => id !== action.payload)
      return { ...state, cartItems: updatedCartItems }
    }
    
    case "INCREASE_ITEM_QUANTITY": {
      const updatedCartItems = cartItems.map(item => {
        if(item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return { ...item }
      })
      return { ...state, cartItems: updatedCartItems }
    }
    
    case "DECREASE_ITEM_QUANTITY": {
      const updatedCartItems = cartItems.map(item => {
        if(item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return { ...item }
      })
      .filter(({ quantity }) => quantity > 0)
      return { ...state, cartItems: updatedCartItems }
    }
    
    case "TOGGLE_CART_VISIBILITY": {
      return { ...state, isVisible: !isVisible }
    }
    
    default: {
      return state
    }
  }
}

export default cartReducer