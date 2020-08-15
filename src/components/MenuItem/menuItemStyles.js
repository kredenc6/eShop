import styled from "styled-components"

export const StyledMenuImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const StyledContent = styled.div`
  padding: 1rem;
  text-align: center;
  color: #555;
  border: 1px solid #555;
  background-color: #fff;
  opacity: .7;
  transition: all .3s;
`

export const StyledMenuItem = styled.div`
  position: relative;
  flex: 1 1 auto;
  min-width: 30%;
  height: ${({ size }) => size === "large" ? "25rem" : "15rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem .5rem 0 ;
  border: 1px solid #555;
  transition: all 3s;
  overflow: hidden;
  
  &:hover {
    cursor: pointer;
    ${StyledMenuImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(.25, .45, .45, .95);
    }
    ${StyledContent} {
      opacity: .9;
    }
  }
`
