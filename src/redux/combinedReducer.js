import { cartReducer } from "./reducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
    cart : cartReducer
})

export default combinedReducer