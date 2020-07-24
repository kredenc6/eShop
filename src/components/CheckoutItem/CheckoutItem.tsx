import React from "react"
import { useDispatch } from "react-redux"
import { increaseItemQuantity, decreaseItemQuantity, removeFromCart } from "../../redux/actions/cartActions"
import ButtonIcon from "../ButtonIcon/ButtonIcon"
import "./checkoutItem.scss"

type Props = {
  quantity: number
  id: number
  imageUrl: string
  name: string
  price: number
}

export default function CheckoutItem({ quantity, id, imageUrl, name, price }: Props) {
  const dispatch = useDispatch()

  return(
    <div className="checkout-item">
      <div className="item-image" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
      <div>{name}</div>
      <div className="quantity">
        <ButtonIcon disabled={quantity === 1} icon="<" onClick={() => dispatch(decreaseItemQuantity(id))} />
        {quantity}
        <ButtonIcon icon=">" onClick={() => dispatch(increaseItemQuantity(id))} />
      </div>
      <div>${price}</div>
      <ButtonIcon icon="x" onClick={() => dispatch(removeFromCart(id))} />
    </div>
  )
}
