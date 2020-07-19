import React from "react"
import { Link } from "react-router-dom"
import firebase, { auth } from "../../firebase"
import { ReactComponent as Logo } from "../../svgs/crown.svg"
import "./header.scss"

type Props = {
  currentUser: firebase.User | null
}

export default function Header({ currentUser }: Props) {
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