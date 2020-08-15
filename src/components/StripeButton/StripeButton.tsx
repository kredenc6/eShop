import React from "react"
import StripeCheckout, { Token } from "react-stripe-checkout"

type Props = {
  checkoutSum: number
}

export default function StripeButton({ checkoutSum }: Props) {
  const stripeSum = checkoutSum * 100

  const onToken = (token: Token) => {
    alert("Payment successful.")
  }

  return (
    <StripeCheckout
      name="e-shop" // the pop-in header title
      description="Best e-shop ever" // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      label="Pay With Card" // text inside the Stripe button
      panelLabel="Pay" // prepended to the amount in the bottom pay button
      amount={stripeSum} // cents
      currency="USD"
      stripeKey="pk_test_51HCoUdIknnjHV0L10cMvosnA1a0TV9nGJy13Uo6tBnXIIaaAPUbXHGRmru3LDUpYVzArJOsPHseerZHD2KYXmmF000jKIOMTzK"
      locale="auto"
      email="info@e-shop.com"
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      zipCode
      // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
      // you are using multiple stripe keys
      reconfigureOnUpdate={false}
      // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
      // useful if you're using React-Tap-Event-Plugin
      token={onToken} />
  )
}