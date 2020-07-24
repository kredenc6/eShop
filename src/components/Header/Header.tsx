import React from "react"
import { Link } from "react-router-dom"
import { currentUserSelector } from "../../redux/selectors/userSelector"
import { cartItemCountSelector } from "../../redux/selectors/cartSelector"
import { connect } from "react-redux"
import { auth } from "../../firebase/firebaseUtils"
import ShoppingBag from "../ShoppingBag/ShoppingBag"
import Cart from "../Cart/Cart"
import { ReactComponent as Logo } from "../../svgs/crown.svg"
import { toggleCartVisibility } from "../../redux/actions/cartActions"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { CurrentUser } from "../../types/stateTypes"
import "./header.scss"

type Props = {
  currentUser: CurrentUser | null
  itemCount: number
  toggleCartVisibility: () => void
}

const Header = ({ currentUser, itemCount, toggleCartVisibility }: Props) => {
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
        <li><ShoppingBag itemCount={itemCount} onClick={() => toggleCartVisibility()} /></li>
      </ul>
      <Cart />
    </header>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  currentUser: currentUserSelector(state),
  itemCount: cartItemCountSelector(state)
})
const mapDispatchToProps = {
  toggleCartVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)