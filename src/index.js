import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App.js';
import { persistor, store } from './store/store';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/es/integration/react'

//PersistGate delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.
ReactDOM.render(<Provider store={store}><PersistGate persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
