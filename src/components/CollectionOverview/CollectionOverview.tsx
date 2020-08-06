import React from "react"
import { connect } from "react-redux"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { overviewCollectionSelector } from "../../redux/selectors/shopSelector"
import CollectionPreview from "../CollectionPreview/CollectionPreview"
import { ShopItem } from "../../types/stateTypes"

type Props = {
  collections: ShopItem[]
}

const CollectionOverview = ({ collections }: Props) => {
  const CollectionPreviewComponents = collections.map(({ id, ...restPreviewProps }) => (
      <CollectionPreview key={id} {...restPreviewProps} />
  ))

  return (
    <div>
      <h1 className="title">collections</h1>
      {CollectionPreviewComponents}
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  collections: overviewCollectionSelector(state)
})

export default connect(mapStateToProps)(CollectionOverview)