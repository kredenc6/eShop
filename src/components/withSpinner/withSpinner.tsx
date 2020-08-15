import React from "react"
import { SpinnerContainer, SpinnerOverlay } from "./withSpinnerStyles"

type Props = {
  isLoading: boolean
  [propName: string]: any
}

const withSpinner = (WrappedComponent: (props: any) => any) => ({ isLoading, ...otherProps }: Props) => {
  return (
    isLoading ?
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    :
      <WrappedComponent {...otherProps} />
  )
}

export default withSpinner
