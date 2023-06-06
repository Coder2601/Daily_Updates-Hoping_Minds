import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { showHideReducer } from "./showHideListReducer";

export const allReducers = combineReducers({
    tasks:todoReducer,
    showHide:showHideReducer
})