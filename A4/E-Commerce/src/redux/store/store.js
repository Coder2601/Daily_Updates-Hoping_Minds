import {createStore} from 'redux';
import { addToCart } from '../reducers/addToCartReducer';

export const carStore = createStore(addToCart); 