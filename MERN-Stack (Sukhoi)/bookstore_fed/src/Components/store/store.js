import {createStore} from 'redux'
import { cartReducer } from '../reducers/cartReducer'

export const myStore = createStore(cartReducer)