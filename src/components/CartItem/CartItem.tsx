import React from "react"
import { CartItem as CartItemType } from "../../redux/actions/cartActionTypes"
import "./cartItem.scss"

type Props = {
  cartItem: CartItemType
}

export default function CartItem({ cartItem }: Props) {
  const { quantity, imageUrl, name, price } = cartItem

  return(
    <div className="cart-item">
      <div className="item-image" style={{ backgroundImage: `url("${imageUrl}")`}}></div>
      <div className="cart-item-description">
        <p>{name}</p>
        <p>{`${quantity} x $${price}`}</p>
      </div>
    </div>
  )
}