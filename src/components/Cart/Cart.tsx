import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { RootReducer } from "../../redux/reducers/rootReducer"
import classnames from "classnames"
import CartItem from "../CartItem/CartItem"
import SharedButton from "../SharedButton/SharedButton"
import SimpleBar from "simplebar-react"
import { toggleCartVisibility } from "../../redux/actions/cartActions"
import "./cart.scss"
import 'simplebar/dist/simplebar.min.css';

export default function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(({ cart }: RootReducer) => cart.cartItems, shallowEqual)
  const isCartVisible = useSelector(({ cart }: RootReducer) => cart.isVisible, shallowEqual)
  const CartItemComponents = cartItems.map(cartItem => {
    return <CartItem cartItem={cartItem} key={cartItem.id} />
  })
  return(
    <div className={classnames("cart", isCartVisible && "visible")}>
      <SimpleBar className="cart-items">
        {CartItemComponents}
      </SimpleBar>
      <Link to="/checkout">
        <SharedButton className="primary-button" onClick={() => dispatch(toggleCartVisibility())} value="go to checkout" />
      </Link>
    </div>
  )
}