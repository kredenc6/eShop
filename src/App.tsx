import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { auth, createUserProfileDocument } from "./firebase"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Shop from "./pages/Shop/Shop"
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp"
import { CurrentUser } from "./types/stateTypes"
import "./styles/global.css"

export default function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null)

  useEffect(() => {
    let unsubscribeSnapshot: undefined | (() => void);
    // TODO better descritpion of what's going on is needed(and better implementation?)...
    const unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth && userAuth.displayName) { // ..."userAuth.displayName" -> don't allow email sign ups without displayName
        const userRef = await createUserProfileDocument(userAuth)
        unsubscribeSnapshot = userRef?.onSnapshot(snapshot => {
          const nextUser = snapshot.data() as CurrentUser | undefined
          nextUser ? setCurrentUser(nextUser) : setCurrentUser(null)
        })
      } else {
        setCurrentUser(null)
      }
    })
    return () => {
      unsubscribeAuth()
      unsubscribeSnapshot && unsubscribeSnapshot()
    }
  },[])

  return (
    <div>
      Logged in as {currentUser?.displayName}
      <Header currentUser={currentUser} />
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
