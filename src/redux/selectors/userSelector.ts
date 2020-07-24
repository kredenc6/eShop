import { createSelector } from "reselect"
import { RootReducer } from "../reducers/rootReducer"

const getCurrentUser = ({ user }: RootReducer) => user.currentUser

export const currentUserSelector = createSelector(
  getCurrentUser,
  currentUser => currentUser
)