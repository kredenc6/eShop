import React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Shop from "./pages/Shop/Shop"
import "./styles/global.css"

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route exact component={Shop} path="/shop" />
      </Switch>
    </div>
  )
}
