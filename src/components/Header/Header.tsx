import React from "react"
import { Link } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { auth } from "../../firebase/firebaseUtils"
import ShoppingBag from "../ShoppingBag/ShoppingBag"
import Cart from "../Cart/Cart"
import { ReactComponent as Logo } from "../../svgs/crown.svg"
import { toggleCartVisibility } from "../../redux/actions/cartActions"
import { RootReducer } from "../../redux/reducers/rootReducer"
import "./header.scss"

export default function Header () {
  const dispatch = useDispatch()
  const currentUser = useSelector(({ user }: RootReducer) => user.currentUser, shallowEqual)
  const itemCount = useSelector(({ cart }: RootReducer) => cart.cartItems.reduce(
    (accumulator, { quantity }) => accumulator + quantity,
    0), shallowEqual)

  return(
    <header className="shop-header">
      <Link to="/"><Logo /></Link>
      <ul className="options">
        <li><Link to="/shop">shop</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li>
          {currentUser ?
              <button className="header-button" onClick={() => auth.signOut()}>log out</button>
            :
              <Link to="/signin">sign in</Link>
          }
        </li>
        <li><ShoppingBag itemCount={itemCount} onClick={() => dispatch(toggleCartVisibility())} /></li>
      </ul>
      <Cart />
    </header>
  )
}
