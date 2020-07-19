import React from "react"
import SignIn from "../../components/SignIn/SignIn"
import SignUp from "../../components/SignUp/SignUp"
import "./signInAndSignUp.scss"

export default function SignInAndSignUp() {
  return(
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}