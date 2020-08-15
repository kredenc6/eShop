import styled from "styled-components"
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export const StyledCart = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 15rem;
  height: 22.5rem;
  display: ${({ isCartVisible }) => isCartVisible ? "flex" : "none" };
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #000;
  background-color: #fff;
  z-index: 1;
`

export const StyledCartItems = styled(SimpleBar)`
  flex: 1 1 auto;
  max-height: 80%;
  width: 100%;
  text-align: center;
  & p {
    font-size: 1.2rem;
  }
`
