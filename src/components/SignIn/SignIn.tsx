import React, { useState } from "react"
import { auth, signInWithGoogle } from "../../firebase/firebaseUtils"
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

  const handleSignIn = async () => {
    console.log("Signing in with email.")
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
      console.dir(user)
      console.log(`You've logged in successfuly with email: ${user?.email}`)
    }catch(error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    }
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
          required
          type="email"
          value={email} />
        <FormInput
          label="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          required
          type="password"
          value={password} />
        <div className="button-wrapper">
          <SharedButton
            colorTheme="primary"
            onClick={handleSignIn}
            value="sign in" />
          <SharedButton
            colorTheme="secondary"
            onClick={handleSignInWithGoogle}
            type="button"
            value="sign in with google" />
        </div>
      </form>
    </div>
  )
}