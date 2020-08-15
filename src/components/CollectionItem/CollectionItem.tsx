import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { addToCart } from "../../redux/actions/cartActions"
import SharedButton from "../SharedButton/SharedButton"
import { StyledCollectionItem, StyledCollectionItemFooter, StyledItemImg } from "./collectionItemStyles"

interface Props extends PropsFromRedux {
  id: number
  imageUrl: string
  name: string
  price: number
}

const CollectionItem = ({ addToCart, id, imageUrl, name, price }: Props) => {
  return(
    <StyledCollectionItem>
      <SharedButton
        colorTheme="primary" 
        onClick={() => addToCart({ id, imageUrl, name, price })}
        value="add to cart" />
      <StyledItemImg imageUrl={imageUrl} />
      <StyledCollectionItemFooter>
        <span>{name}</span>
        <span>{`$${price}`}</span>
      </StyledCollectionItemFooter>
    </StyledCollectionItem>
  )
}

const mapDispatchToProps = {
  addToCart
}

const connector = connect(null, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CollectionItem)