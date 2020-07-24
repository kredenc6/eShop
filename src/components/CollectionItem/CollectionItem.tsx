import React from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/actions/cartActions"
import SharedButton from "../SharedButton/SharedButton"
import "./collectionItem.scss"

type Props = {
  id: number
  imageUrl: string
  name: string
  price: number
}

export default function CollectionItem({ id, imageUrl, name, price }: Props) {
  const dispatch = useDispatch()

  return(
    <div className="collection-item">
      <SharedButton
        className="primary-button" 
        onClick={() => dispatch(addToCart({ id, imageUrl, name, price }))}
        value="add to cart" />
      <div className="item-img" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
      <div className="collection-item-footer">
        <span>{name}</span>
        <span>{`$${price}`}</span>
      </div>
    </div>
  )
}