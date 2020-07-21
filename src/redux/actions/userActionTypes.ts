import { CurrentUser } from "../../types/stateTypes"

export const SET_CURRENT_USER = "SET_CURRENT_USER"

type SetCurrentUser = {
  type: typeof SET_CURRENT_USER
  payload: CurrentUser | null
}

type UserActionTypes = SetCurrentUser
export default UserActionTypes