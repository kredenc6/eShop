import React from "react"
import { connect } from "react-redux"
import { addToCart } from "../../redux/actions/cartActions"
import SharedButton from "../SharedButton/SharedButton"
import "./collectionItem.scss"
import { CollectionItemType } from "../../initialValues/shopData"

type Props = {
  addToCart: ({ id, imageUrl, name, price }: CollectionItemType) => void
  id: number
  imageUrl: string
  name: string
  price: number
}

const CollectionItem = ({ addToCart, id, imageUrl, name, price }: Props) => {
  return(
    <div className="collection-item">
      <SharedButton
        className="primary-button" 
        onClick={() => addToCart({ id, imageUrl, name, price })}
        value="add to cart" />
      <div className="item-img" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
      <div className="collection-item-footer">
        <span>{name}</span>
        <span>{`$${price}`}</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  addToCart
}

export default connect(null, mapDispatchToProps)(CollectionItem)