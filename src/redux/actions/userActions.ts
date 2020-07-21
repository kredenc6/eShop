import UserActionTypes, { SET_CURRENT_USER } from "./userActionTypes"
import { CurrentUser } from "../../types/stateTypes"

export const setCurrentUser = (newUser: CurrentUser | null): UserActionTypes => {
  return {
    type: SET_CURRENT_USER,
    payload: newUser
  }
}

