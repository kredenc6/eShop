import { createSelector } from "reselect"
import { RootReducer } from "../reducers/rootReducer"

const getDirectory = (state: RootReducer) => state.directory

export const directorySelector = createSelector(
  getDirectory,
  directory => directory
)