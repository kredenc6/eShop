import styled from "styled-components"

const primaryButtonStyles = `
  color: #ddd;
  background-color: #333;
  &:hover {
    color: #fff;
    background-color: #000;
  }
  &:disabled {
    color: #ddd;
    background-color: #aaa;
  }
`

const secondaryButtonStyles = `
  color: #ddd;
  background-color: rgb(3, 13, 160);
  &:hover {
    color: #fff;
    background-color: rgb(45, 52, 158);
  }
  &:disabled {
    color: #ddd;
    background-color: #aaa;
  }
`

export const StyledSharedButton = styled.button`
  margin: .5rem;
  padding: 1rem;
  font-size: .8rem;
  transition: all .3s;
  ${({ colorTheme }) => colorTheme === "primary" ? primaryButtonStyles : secondaryButtonStyles}
`
