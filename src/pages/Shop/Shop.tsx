import React from "react"
import { Route, RouteComponentProps } from "react-router-dom"
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview"
import Collection from "../Collection/Collection"
import "./shop.scss"

export default function Shop({ match }: RouteComponentProps) {
  return (
    <div>
      <Route component={CollectionOverview} exact path={`${match.path}`} />
      <Route component={Collection} path={`${match.path}/:collectionId`} />
    </div>
  )
}
