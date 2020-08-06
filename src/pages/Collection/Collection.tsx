import React from "react"
import { connect } from "react-redux"
import { collectionSelector } from "../../redux/selectors/shopSelector"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { RouteComponentProps } from "react-router-dom"
import { ShopData } from "../../types/stateTypes"
import CollectionItem from "../../components/CollectionItem/CollectionItem"
import "./collection.scss"

type Props = {
  collection: ShopData[0]
}

type MatchProps = {
  collectionId: string
}

const Collection = ({ collection }: Props & RouteComponentProps<MatchProps>) => {
  const { title, items } = collection
  const CollectionItemComponents = items.map(item => (
    <CollectionItem key={item.id} {...item} /> 
  ))

  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="collection">
        {CollectionItemComponents}
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootReducer, ownProps: RouteComponentProps<MatchProps>) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
