import React from "react"
import { shallowEqual, useSelector } from "react-redux"
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem"
import { RootReducer } from "../../redux/reducers/rootReducer"
import "./checkout.scss"

export default function Checkout() {
  const cartItems = useSelector(({ cart }: RootReducer) => cart.cartItems, shallowEqual)
  const finalPrice = cartItems.reduce((acc, cartItem) => (acc + cartItem.price * cartItem.quantity), 0)
  const CheckoutItemComponents = cartItems.map(cartItem => <CheckoutItem key={cartItem.id} {...cartItem} />)

  return(
    <div className="checkout-table">
      <div className="table-header">
        <span>product</span>
        <span>description</span>
        <span>quantity</span>
        <span>price</span>
        <span>remove</span>
      </div>
      <div>{CheckoutItemComponents}</div>
      <div className="checkout-footer">total: ${finalPrice}</div>
    </div>
  )
}