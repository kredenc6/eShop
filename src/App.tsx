import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import firebase, { auth } from "./firebase"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import Shop from "./pages/Shop/Shop"
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp"
import "./styles/global.css"

export default function App() {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(newUser => setCurrentUser(newUser))
    return () => unsubscribe()
  },[])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route component={Shop} path="/shop" />
        <Route component={SignInAndSignUp} path="/signin" />
      </Switch>
    </div>
  )
}
