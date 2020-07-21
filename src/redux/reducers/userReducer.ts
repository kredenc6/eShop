import UserActionTypes from "../actions/userActionTypes"
import { CurrentUser } from "../../types/stateTypes"

type UserReducerState = {
  currentUser: CurrentUser | null
}

const userReducer = (state: UserReducerState = { currentUser: null }, action: UserActionTypes) => {
  switch(action.type) {
    case "SET_CURRENT_USER": {
      return { ...state, currentUser: action.payload }
    }
    default: {
      return state
    }
  }
}

export default userReducer
