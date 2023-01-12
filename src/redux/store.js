import {createStore} from "redux"
import combinedReducer from "./combinedReducer"
const store = createStore(combinedReducer)

export default store