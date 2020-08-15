import React, { useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { connect, ConnectedProps } from "react-redux"
import { setCurrentUser } from "./redux/actions/userActions"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Shop from "./pages/Shop/Shop"
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp"
import Checkout from "./pages/Checkout/Checkout"
import { CurrentUser } from "./types/stateTypes"
import { RootReducer } from "./redux/reducers/rootReducer"
import { currentUserSelector } from "./redux/selectors/userSelector"
import "./styles/global.css"


const App = ({ currentUser, setCurrentUser }: PropsFromRedux) => {
  useEffect(() => {
    let unsubscribeSnapshot: undefined | (() => void)
    const unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        unsubscribeSnapshot = userRef?.onSnapshot(snapshot => {
          const nextUser = {
            id: snapshot.id,
            ...snapshot.data()
          } as unknown as CurrentUser
          setCurrentUser(nextUser)
        })
      } else {
        setCurrentUser(null)
      }
    })
    return () => {
      unsubscribeAuth()
      unsubscribeSnapshot && unsubscribeSnapshot()
    }
  }, [setCurrentUser])

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

const mapStateToProps = (state: RootReducer) => ({
  currentUser: currentUserSelector(state)
})

const mapDispatchToProps = {
  setCurrentUser
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)