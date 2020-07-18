import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import "./styles/global.css"

const HatPage = () => (
  <div>
    <h1>hat page</h1>
    <Link to="/">home</Link>
  </div>
) 

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route exact component={HatPage} path="/shop/hats" />
      </Switch>
    </div>
  )
}
