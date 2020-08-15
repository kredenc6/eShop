import styled from "styled-components"

const VERTICAL_INPUT_PADDING = "0.5rem"
const HORIZONTAL_INPUT_PADDING = "0.4rem"
const labelOnTop = `
  top: -1rem;
  left: 0.1rem;
  font-size: 0.8rem;
`

export const StyledFormInputWrapper = styled.div`
  position: relative;
  margin: 1.8rem 0 2rem;
`

export const StyledFormInput = styled.input`
  width: 100%;
  padding: ${VERTICAL_INPUT_PADDING} ${HORIZONTAL_INPUT_PADDING};
  border: none;
  border-bottom: 1px solid #555;
  outline: none;
  &:focus {
    & + label {
      ${labelOnTop};
    }
  }
`

export const StyledLabel = styled.label`
  position: absolute;
  top: ${VERTICAL_INPUT_PADDING} - 0.2rem;
  left: ${HORIZONTAL_INPUT_PADDING};
  transition: all 0.3s;
  ${({ isDescriptionLabel }) => isDescriptionLabel && labelOnTop};
`
