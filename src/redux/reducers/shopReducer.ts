import ShopActionTypes from "../actions/shopActionTypes"
import { ShopData } from "../../types/stateTypes"

type ShopState = {
  collections: null | ShopData
  errMessage: undefined | string
  isLoading: boolean
}

const initialState: ShopState = {
  collections: null,
  errMessage: undefined,
  isLoading: false
}

const shopReducer = (state = initialState, action: ShopActionTypes): ShopState => {
  switch(action.type) {
    case "FETCH_COLLECTIONS_START": {
      return { ...state, isLoading: true }
    }

    case "FETCH_COLLECTIONS_SUCCESS": {
      return { ...state, collections: action.payload, isLoading: false }
    }
    
    case "FETCH_COLLECTIONS_FAILURE": {
      return { ...state, errMessage: action.payload, isLoading: false }
    }

    default: {
      return state
    }
  }
}

export default shopReducer
