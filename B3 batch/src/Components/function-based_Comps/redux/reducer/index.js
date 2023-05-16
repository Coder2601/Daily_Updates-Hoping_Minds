import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { counterReducer } from "./counterReducer";

export const allReducers = combineReducers({
    counter:counterReducer,
    logged:loginReducer
});
