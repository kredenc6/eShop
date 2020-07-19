import React, { useState } from "react"
import { auth, signInWithGoogle } from "../../firebase"
import FormInput from "../../components/FormInput/FormInput"
import SharedButton from "../../components/SharedButton/SharedButton"
import "./signIn.scss"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignInWithGoogle = () => {
    console.log("Signing in with google.")
    signInWithGoogle()
      .then(userCredential => {
        console.log(`Signed in with google: ${userCredential.user?.email}.`)
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  const handleSignIn = () => {
    console.log("Signing in.")
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => console.log(`You've logged in successfuly with email: ${userCredential.user?.email}`))
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  return(
    <div className="sign-in-form">
      <h2>I already have an account</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={e => e.preventDefault()}>
        <FormInput
          label="email"
          name="email"
          onChange={(e => setEmail(e.target.value))}
          placeholder="test"
          type="email"
          value={email} />
        <FormInput
          label="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password} />
        <div className="button-wrapper">
          <SharedButton
            className="primary-button"
            onClick={handleSignIn}
            value="sign in" />
          <SharedButton
            className="secondary-button"
            onClick={handleSignInWithGoogle}
            value="sign in with google" />
        </div>
      </form>
    </div>
  )
}