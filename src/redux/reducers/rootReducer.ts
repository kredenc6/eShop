import { combineReducers } from "redux"
import { persistReducer  } from "redux-persist"
import storage from "redux-persist/lib/storage"
import cartReducer from "./cartReducer"
import userReducer from "./userReducer"
import shopReducer from "./shopReducer"
import directoryReducer from "./directoryReducer"


const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  directory: directoryReducer,
  shop: shopReducer
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer

export type RootReducer = ReturnType<typeof rootReducer>