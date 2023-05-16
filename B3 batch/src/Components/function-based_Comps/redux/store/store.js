import {createStore} from 'redux';
import { allReducers } from '../reducer';

export const myStore = createStore(allReducers)