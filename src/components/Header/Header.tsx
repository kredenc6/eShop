import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { auth } from "../../firebase/firebaseUtils"
import { ReactComponent as Logo } from "../../svgs/crown.svg"
import "./header.scss"
import { RootReducer } from "../../redux/reducers/rootReducer"


export default function Header () {
  const currentUser = useSelector(({ user }: RootReducer) => user.currentUser)

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
        <li><Link to="/cart">cart icon</Link></li>
      </ul>
    </header>
  )
}
