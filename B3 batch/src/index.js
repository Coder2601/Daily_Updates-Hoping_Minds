import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainComp from './Components/function-based_Comps/useContextHook/myForm/MainComp';
import {Provider} from 'react-redux'
import { myStore } from './Components/function-based_Comps/redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={myStore}>
<App />
</Provider>

);

