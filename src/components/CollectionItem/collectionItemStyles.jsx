import { memo } from "react"
import styled from "styled-components"

export const StyledCollectionItem = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  button {
    position: absolute;
    bottom: 15%;
    left: 50%;
    display: none;
    transform: translate(-50%);
    padding: .8rem;
    color: #555;
    background-color: #fff;
    opacity: .7;
    z-index: 1;
    transition: all .3s;
    &:hover {
      opacity: .9;
    }
  }
  &:hover {
    button {
      display: block;
    }
  }
`

export const StyledItemImg = memo(styled.div`
  width: 100%;
  height: 95%;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`)

export const StyledCollectionItemFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
