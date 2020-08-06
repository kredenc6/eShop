import SHOP_DATA from "../../initialValues/shopData"

const initialState = {
  collections: SHOP_DATA
}

const shopReducer = (state = initialState, action: { type: string }) => {
  switch(action.type) {
    default: {
      return state
    }
  }
}

export default shopReducer