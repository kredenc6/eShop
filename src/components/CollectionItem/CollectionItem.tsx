import React from "react"
import "./collectionItem.scss"

type Props = {
  imageUrl: string
  name: string
  price: number
}

export default function CollectionItem({ imageUrl, name, price }: Props) {
  return(
    <div className="collection-item">
      <div className="add-to-card">add to cart</div>
      <img alt={name} src={`${imageUrl}`} />
      <div className="collection-item-footer">
        <span>{name}</span>
        <span>{`$${price}`}</span>
      </div>
    </div>
  )
}