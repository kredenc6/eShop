import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import "./formInput.scss"

type Props = {
  label?: string
}

export default function FormInput({ label, placeholder, ...restInputProps }: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="input-wrapper">
      <input
        className={classnames("form-input", label && "with-label")}
        placeholder={label ? "" : placeholder}
        {...restInputProps} />
      {label ? 
          <label
            className={classnames(
              "label",
              (restInputProps.value as string)?.length && "description-label")}
          >
            {label}
          </label>
        :
          null
      }
    </div>
  )
}