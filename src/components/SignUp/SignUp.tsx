import React, { useState } from "react"
import { auth, createUserProfileDocument } from "../../firebase/firebaseUtils"
import FormInput from "../FormInput/FormInput"
import SharedButton from "../SharedButton/SharedButton"
import "./signUp.scss"

export default function SignUp() {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("signing up")
    e.preventDefault()
    if(password !== passwordConfirmation) {
      console.warn("Password mismatch!")
      return
    }
    try {
      const { user: newUser } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(newUser, { displayName })
      setDisplayName("")
      setEmail("")
      setPassword("")
      setPasswordConfirmation("")
      console.log(`${newUser?.email} email registered successfuly.`)
    } catch(err) {
      console.error(err.message)
    }
  }

  return (
    <div className="sign-up-form">
      <h2>I don't have an account</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="name"
          name="name"
          onChange={e => setDisplayName(e.target.value)}
          required
          type="text"
          value={displayName} />
        <FormInput
          label="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
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
        <FormInput
          label="confirm password"
          name="confirmPassword"
          onChange={e => setPasswordConfirmation(e.target.value)}
          required
          type="password"
          value={passwordConfirmation} />
        <div className="button-wrapper">
          <SharedButton className="primary-button" value="sign up" />
        </div>
      </form>
    </div>
  )
}