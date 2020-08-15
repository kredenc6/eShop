import React from "react"
import { CartItem as CartItemType } from "../../redux/actions/cartActionTypes"
import { StyledCartItem, StyledCartItemImg, StyledCartItemDescription } from "./cartItemStyles"

type Props = {
  cartItem: CartItemType
}

export default function CartItem({ cartItem }: Props) {
  const { quantity, imageUrl, name, price } = cartItem

  return(
    <StyledCartItem>
      <StyledCartItemImg imageUrl={imageUrl} />
      <StyledCartItemDescription>
        <p>{name}</p>
        <p>{`${quantity} x $${price}`}</p>
      </StyledCartItemDescription>
    </StyledCartItem>
  )
}