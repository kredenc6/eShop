import { applyMiddleware, compose, createStore } from "redux"
import { persistStore } from "redux-persist"
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer"

let middleware: any[] = [thunk]
let store: any;

if(process.env.NODE_ENV === "development") { // use REDUX DEVTOOLS in development
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  )
} else {
  store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
}

export default () => ({
  store,
  persistor: persistStore(store)
})
