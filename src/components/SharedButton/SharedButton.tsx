import React, { ButtonHTMLAttributes } from "react"
import "./sharedButton.scss"

type Props = {
  className: "primary-button" | "secondary-button"
  value: string
}

export default function SharedButton({ className, value, ...buttonProps }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={className} {...buttonProps}>
      {value.toUpperCase()}
    </button>
  )
}