import React from "react"
import { connect } from "react-redux"
import { cartItemsSelector } from "../../redux/selectors/cartSelector"
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem"
import StripeButton from "../../components/StripeButton/StripeButton"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { CartItem } from "../../redux/actions/cartActionTypes"
import "./checkout.scss"

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
      <div className="table-footer">total: ${finalPrice}</div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVC: 123
      </div>
      <div className="stripe-button-wrapper">
        <StripeButton checkoutSum={finalPrice} />
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  cartItems: cartItemsSelector(state)
})

export default connect(mapStateToProps)(Checkout)
