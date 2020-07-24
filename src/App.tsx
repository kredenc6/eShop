import React, { useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { setCurrentUser } from "./redux/actions/userActions"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Shop from "./pages/Shop/Shop"
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp"
import Checkout from "./pages/Checkout/Checkout"
import { CurrentUser } from "./types/stateTypes"
import { RootReducer } from "./redux/reducers/rootReducer"
import "./styles/global.css"

import { currentUserSelector } from "./redux/selectors/userSelector"

export default function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(({ user }: RootReducer) => user.currentUser, shallowEqual)
  // const currentUser = useSelector((state: RootReducer) => currentUserSelector(state))

  useEffect(() => {
    let unsubscribeSnapshot: undefined | (() => void)
    const unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        unsubscribeSnapshot = userRef?.onSnapshot(snapshot => {
          const nextUser = snapshot.data() as CurrentUser | undefined
          nextUser ? dispatch(setCurrentUser(nextUser)) : dispatch(setCurrentUser(null))
        })
      } else {
        dispatch(setCurrentUser(null))
      }
    })
    return () => {
      unsubscribeAuth()
      unsubscribeSnapshot && unsubscribeSnapshot()
    }
  },[dispatch])

  return (
    <div>
      <Header />
      <div id="appBody">
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={Shop} path="/shop" />
          <Route
            exact
            path="/signin"
            render={currentUser ? () => <Redirect to="/" /> : SignInAndSignUp} />
          <Route component={Checkout} path="/checkout" />
        </Switch>
      </div>
    </div>
  )
}
