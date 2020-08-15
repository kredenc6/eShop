import styled from "styled-components"

export const StyledCartItem = styled.div`
  width: 100%;
  height: 7.5rem;
  margin-bottom: 1rem;
  display: flex;
`

export const StyledCartItemImg = styled.div`
  width: 40%;
  margin-right: 1rem;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const StyledCartItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`