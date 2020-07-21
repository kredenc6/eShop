import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/actions/userActions"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Shop from "./pages/Shop/Shop"
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp"
import { CurrentUser } from "./types/stateTypes"
import { RootReducer } from "./redux/reducers/rootReducer"
import "./styles/global.css"

type Props = {
  currentUser: CurrentUser | null
  setCurrentUser: (newUser: CurrentUser | null) => void
}

const App = ({ currentUser, setCurrentUser }: Props) => {

  useEffect(() => {
    let unsubscribeSnapshot: undefined | (() => void);

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
  },[setCurrentUser])

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

const mapStateToProps = ({ user }: RootReducer) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = {
  setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)