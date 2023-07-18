
import {combineReducers, createStore} from 'redux';
import { countReducer } from '../reducers/countReducer';
import { fruitsReducer } from '../reducers/fruitsReducer';
import { todoReducer } from '../reducers/todoReducers';

const allReducers = combineReducers({
    count:countReducer,
    fruits:fruitsReducer,
    todos:todoReducer
})



//{count:10, fruits:['apple','grapes','litchi']}


export const myStore = createStore(allReducers);