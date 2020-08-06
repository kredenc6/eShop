import { createSelector } from "reselect";
import { RootReducer } from "../reducers/rootReducer";

const getShop = (state: RootReducer) => state.shop

export const collectionSelector = (idPropsFromUrl: string) => createSelector(
  getShop,
  shop => shop.collections[idPropsFromUrl]
)

export const overviewCollectionSelector = createSelector(
  getShop,
  ({ collections }) => Object.values(collections)
)
