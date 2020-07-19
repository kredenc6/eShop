import React, { useState } from "react"
import { auth } from "../../firebase"
import FormInput from "../FormInput/FormInput"
import SharedButton from "../SharedButton/SharedButton"
import "./signUp.scss"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("signing up")
    e.preventDefault()
    if(password !== passwordConfirmation) {
      console.warn("Password mismatch!")
      return
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(`${userCredential.user?.email} email registered successfuly.`)
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  return (
    <div className="sign-up-form">
      <h2>I don't have an account</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="name"
          onChange={e => setName(e.target.value)}
          type="text"
          value={name} />
        <FormInput
          label="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          type="email"
          value={email} />
        <FormInput
          label="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password} />
        <FormInput
          label="confirm password"
          name="confirmPassword"
          onChange={e => setPasswordConfirmation(e.target.value)}
          type="password"
          value={passwordConfirmation} />
          <div className="button-wrapper">
            <SharedButton className="primary-button" value="sign up" />
          </div>
      </form>
    </div>
  )
}