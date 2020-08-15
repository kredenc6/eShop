import { ShopData } from "../../types/stateTypes"

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START"
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS"
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE"

type FetchCollectionsStart = {
  type: typeof FETCH_COLLECTIONS_START
}

type FetchCollectionsSuccess = {
  type: typeof FETCH_COLLECTIONS_SUCCESS
  payload: ShopData
}

type FetchCollectionsFailure = {
  type: typeof FETCH_COLLECTIONS_FAILURE
  payload: string
}

type ShopActionTypes = FetchCollectionsFailure | FetchCollectionsStart | FetchCollectionsSuccess
export default ShopActionTypes