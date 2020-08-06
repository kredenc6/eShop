import React from "react"
import CollectionItem from "../CollectionItem/CollectionItem"
import { CollectionItemType } from "../../types/stateTypes"
import "./collectionPreview.scss"

type Props = {
  items: CollectionItemType[]
  routeName: string
  title: string
}

export default function CollectionPreview({ items, title }: Props) {
  const CollectionItemComponents = items.filter((_, i) => i < 4).map(collectionProps => (
    <CollectionItem key={collectionProps.id} {...collectionProps} />
  ))

  return (
    <div className="shop-section">
      <h2>{title.toUpperCase()}</h2>
      <div className="section-items">
        {CollectionItemComponents}
      </div>
    </div>
  )
}