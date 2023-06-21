import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { carStore } from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={carStore}>
    <App />
    </Provider>
);
