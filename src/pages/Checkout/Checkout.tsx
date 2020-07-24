import React from "react"
import { connect } from "react-redux"
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem"
import { RootReducer } from "../../redux/reducers/rootReducer"
import "./checkout.scss"
import { cartItemsSelector } from "../../redux/selectors/cartSelector"
import { CartItem } from "../../redux/actions/cartActionTypes"

type Props = {
  cartItems: CartItem[]
}

const Checkout= ({ cartItems }: Props) => {
  const finalPrice = cartItems.reduce((acc, cartItem) => (acc + cartItem.price * cartItem.quantity), 0)
  const CheckoutItemComponents = cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)

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

const mapStateToProps = (state: RootReducer) => ({
  cartItems: cartItemsSelector(state)
})

export default connect(mapStateToProps)(Checkout)