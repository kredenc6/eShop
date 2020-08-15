import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { collectionSelector } from "../../redux/selectors/shopSelector"
import { RootReducer } from "../../redux/reducers/rootReducer"
import { RouteComponentProps } from "react-router-dom"
import CollectionItem from "../../components/CollectionItem/CollectionItem"
import "./collection.scss"

type MatchProps = {
  collectionId: string
}

type Props = PropsFromRedux & RouteComponentProps<MatchProps>

const Collection = ({ collection }: Props) => {
  const { title, items } = collection!
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

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Collection)
