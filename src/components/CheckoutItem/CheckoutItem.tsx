import React from "react"
import { connect } from "react-redux"
import { decreaseItemQuantity, increaseItemQuantity, removeFromCart } from "../../redux/actions/cartActions"
import ButtonIcon from "../ButtonIcon/ButtonIcon"
import CartActionTypes, { CartItem } from "../../redux/actions/cartActionTypes"
import "./checkoutItem.scss"

type Props = {
  decreaseItemQuantity: (id: number) => CartActionTypes
  increaseItemQuantity: (id: number) => CartActionTypes
  item: CartItem
  removeFromCart: (id: number) => CartActionTypes
}

const CheckoutItem = ({ decreaseItemQuantity, increaseItemQuantity, item, removeFromCart }: Props) => {
  const { quantity, id, imageUrl, name, price } = item

  return(
    <div className="checkout-item">
      <div className="item-image" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
      <div>{name}</div>
      <div className="quantity">
        <ButtonIcon disabled={quantity === 1} icon="<" onClick={() => decreaseItemQuantity(id)} />
        {quantity}
        <ButtonIcon icon=">" onClick={() => increaseItemQuantity(id)} />
      </div>
      <div>${price}</div>
      <ButtonIcon icon="x" onClick={() => removeFromCart(id)} />
    </div>
  )
}

const mapDispatchToProps = {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
