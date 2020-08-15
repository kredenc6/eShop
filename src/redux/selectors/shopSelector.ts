import { createSelector } from "reselect";
import { RootReducer } from "../reducers/rootReducer";

const getShop = (state: RootReducer) => state.shop

export const collectionSelector = (idPropsFromUrl: string) => createSelector(
  getShop,
  ({ collections }) => collections ? collections[idPropsFromUrl] : null
)

export const overviewCollectionSelector = createSelector(
  getShop,
  ({ collections }) => collections ? Object.values(collections) : []
)

export const isDataLoadedSelector = createSelector(
  getShop,
  ({ collections }) => !!collections
)