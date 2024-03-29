import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { myStore } from './components/functionbasdComps/reduxDemo/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store={myStore}>
        <App />
    </Provider>
);


//React is used to create the componets
//ReactDOM is used to render the components

//Components are HTML tags that always begin with camelCase
//Elements are HTML tags that always begin with lowerCase