import React from "react"
import { connect, ConnectedProps,  } from "react-redux"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { overviewCollectionSelector, isDataLoadedSelector } from "../../redux/selectors/shopSelector"
import CollectionPreview from "../CollectionPreview/CollectionPreview"

const CollectionOverview = ({ collections, isLoading }: PropsFromRedux) => {
  const CollectionPreviewComponents = collections?.map(({ id, ...restPreviewProps }) => (
      <CollectionPreview key={id} {...restPreviewProps} />
  ))

  return (
    <div>
      <h1>collections</h1>
      {CollectionPreviewComponents}
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  collections: overviewCollectionSelector(state),
  isLoading: !isDataLoadedSelector(state)
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CollectionOverview)

