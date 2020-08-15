import React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { connect, ConnectedProps } from "react-redux"
import { cartItemsSelector, isCartVisibleSelector } from "../../redux/selectors/cartSelector"
import { toggleCartVisibility } from "../../redux/actions/cartActions"
import { RootReducer } from "../../redux/reducers/rootReducer"
import CartItem from "../CartItem/CartItem"
import SharedButton from "../SharedButton/SharedButton"
import { StyledCart, StyledCartItems } from "./cartStyles"

type Props = PropsFromRedux & RouteComponentProps

const Cart = ({ cartItems, isCartVisible, history, toggleCartVisibility }: Props) => {
  const CartItemComponents = cartItems.map(cartItem => {
    return <CartItem cartItem={cartItem} key={cartItem.id} />
  })
  return(
    <StyledCart isCartVisible={isCartVisible}>
      <StyledCartItems>
        {cartItems.length ?
            CartItemComponents
          :
            <p>You have no items in the cart.</p>}
      </StyledCartItems>
      <SharedButton
        colorTheme="primary"
        disabled={cartItems.length === 0}
        onClick={() => {
          history.push("/checkout")
          toggleCartVisibility()
        }} value="go to checkout" />
    </StyledCart>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  cartItems: cartItemsSelector(state),
  isCartVisible: isCartVisibleSelector(state)
})

const mapDispatchToProps = ({
  toggleCartVisibility
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default withRouter(connector(Cart))
