import { createStore } from "redux";
import { allReducers } from "../reducers";

export const todoStore = createStore(allReducers)