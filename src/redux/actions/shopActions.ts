import ShopActionTypes, { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START ,FETCH_COLLECTIONS_SUCCESS } from "./shopActionTypes"
import { convertShopDataSnapshotToMap, firestore } from "../../firebase/firebaseUtils"
import { ShopData } from "../../types/stateTypes"
import { Dispatch } from "redux"

export const fetchCollectionsStart = (): ShopActionTypes => {
  return {
    type: FETCH_COLLECTIONS_START
  }
}

export const fetchCollectionsSuccess = (collections: ShopData): ShopActionTypes => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  }
}

export const fetchCollectionsFailure = (errMessage: string): ShopActionTypes => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
  }
}

export const fetchCollectionsAsync = () => (dispatch: Dispatch) => {
  const shopDataRef = firestore.collection("shopData")
  dispatch(fetchCollectionsStart())
  
  return shopDataRef.get()
    .then(snapshot => {
      const loadedShopData = convertShopDataSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(loadedShopData))
    })
    .catch(err => dispatch(fetchCollectionsFailure(err.message)))
}