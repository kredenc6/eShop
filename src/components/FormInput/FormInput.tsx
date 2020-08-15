import React, { InputHTMLAttributes } from "react"
import { StyledFormInput, StyledFormInputWrapper, StyledLabel } from "./formInputStyled"

type Props = {
  label?: string
}

export default function FormInput({ label, placeholder, ...restInputProps }: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <StyledFormInputWrapper>
      <StyledFormInput placeholder={label ? "" : placeholder} {...restInputProps} />
      {label ? 
          <StyledLabel isDescriptionLabel={!!(restInputProps.value as string)?.length}>
            {label}
          </StyledLabel>
        :
          null
      }
    </StyledFormInputWrapper>
  )
}