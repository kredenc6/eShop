import React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { connect } from "react-redux"
import { cartItemsSelector, isCartVisibleSelector } from "../../redux/selectors/cartSelector"
import { toggleCartVisibility } from "../../redux/actions/cartActions"
import { RootReducer } from "../../redux/reducers/rootReducer"
import classnames from "classnames"
import CartItem from "../CartItem/CartItem"
import SharedButton from "../SharedButton/SharedButton"
import SimpleBar from "simplebar-react"
import { CartItem as CartItemType } from "../../redux/actions/cartActionTypes"
import "./cart.scss"
import 'simplebar/dist/simplebar.min.css';

type Props = {
  cartItems: CartItemType[]
  isCartVisible: boolean
  toggleCartVisibility: () => void
}

const Cart = ({ cartItems, history, isCartVisible, toggleCartVisibility }: Props & RouteComponentProps) => {
  const CartItemComponents = cartItems.map(cartItem => {
    return <CartItem cartItem={cartItem} key={cartItem.id} />
  })
  return(
    <div className={classnames("cart", isCartVisible && "visible")}>
      <SimpleBar className="cart-items">
        {CartItemComponents}
      </SimpleBar>
      <SharedButton
        className="primary-button"
        onClick={() => {
          history.push("/checkout")
          toggleCartVisibility()
        }} value="go to checkout" />
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  cartItems: cartItemsSelector(state),
  isCartVisible: isCartVisibleSelector(state)
})

const mapDispatchToProps = ({
  toggleCartVisibility
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))