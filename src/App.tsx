import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "./redux/actions/userActions"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Shop from "./pages/Shop/Shop"
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp"
import { CurrentUser } from "./types/stateTypes"
import { RootReducer } from "./redux/reducers/rootReducer"
import "./styles/global.css"

export default function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(({ user }: RootReducer) => user.currentUser)

  useEffect(() => {
    console.log("slkdfjsdlkf")
    let unsubscribeSnapshot: undefined | (() => void);
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
      Redux state: Logged in as {currentUser?.displayName}
      <Header />
      <div id="appBody">
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={Shop} path="/shop" />
          <Route component={SignInAndSignUp} path="/signin" />
        </Switch>
      </div>
    </div>
  )
}
