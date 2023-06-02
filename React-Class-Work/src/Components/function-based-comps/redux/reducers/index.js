import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { loginReducer } from "./loginReducer";

export const allReducers = combineReducers({
    counter: counterReducer,
    loginState: loginReducer
})