
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { homeReducer } from "./Home/reducer";

const rootReducer = combineReducers({
    loginUser : homeReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

store.subscribe(() => {
    console.log("subscribe :", store.getState());
})