import { createStore } from "redux"
import { persistStore } from "redux-persist"
import rootReducer from "../reducers/rootReducer"

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default () => ({
  store,
  persistor: persistStore(store)
})