import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import { Route, RouteComponentProps } from "react-router-dom"
import { fetchCollectionsAsync } from "../../redux/actions/shopActions"
import { isDataLoadedSelector } from "../../redux/selectors/shopSelector"
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer"
import CollectionContainer from "../Collection/CollectionContainer"
import { RootReducer } from "../../redux/reducers/rootReducer"
import "./shop.scss"

type Props = PropsFromRedux & RouteComponentProps

const Shop = ({ loadShopData, match, isDataLoaded }: Props) => {
  useEffect(() => {
    if(!isDataLoaded) {
      loadShopData()
    }
  },[loadShopData, isDataLoaded])

  return (
    <div>
      <Route component={CollectionOverviewContainer} exact path={`${match.path}`} />
      <Route component={CollectionContainer} path={`${match.path}/:collectionId`} />
    </div>
  )
}

const mapStateToProps = (state: RootReducer) => ({
  isDataLoaded: isDataLoadedSelector(state)
})

const mapDispatchToProps = {
  loadShopData: fetchCollectionsAsync
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Shop)
