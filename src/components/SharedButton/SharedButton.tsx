import React, { ButtonHTMLAttributes } from "react"
import { StyledSharedButton } from "./sharedButtonStyles"

type Props = {
  colorTheme: "primary" | "secondary"
  value: string
}

export default function SharedButton({ colorTheme, value, ...buttonProps }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledSharedButton colorTheme={colorTheme} {...buttonProps}>
      {value.toUpperCase()}
    </StyledSharedButton>
  )
}