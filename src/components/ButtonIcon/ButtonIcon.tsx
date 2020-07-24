import React, { ButtonHTMLAttributes } from "react"
import "./buttonIcon.scss"

type Props = {
  icon: string | JSX.Element
}

export default function ButtonIcon({ icon, ...buttonProps }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="button-icon" {...buttonProps}>{icon}</button>
  )
}