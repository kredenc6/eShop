import React, { ButtonHTMLAttributes } from "react"
import { StyledButtonIcon } from "./buttonIconStyles"

type Props = {
  icon: string | JSX.Element
}

export default function ButtonIcon({ icon, ...buttonProps }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButtonIcon {...buttonProps}>{icon}</StyledButtonIcon>
  )
}