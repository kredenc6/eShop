import React from "react"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import SHOP_DATA from "../../initialValues/shopData"
import "./shop.scss"

export default function Shop() {
  const CollectionPreviewComponents = SHOP_DATA.map(({ id, ...restPreviewProps }) => (
    <CollectionPreview key={id} {...restPreviewProps} />
  ))

  return (
    <div>
      <h1 className="title">COLLECTIONS</h1>
      {CollectionPreviewComponents}
    </div>
  )
}