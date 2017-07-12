import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App1 from './containers/App';

import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {rootReducer} from './reducers'
import promiseMiddleware from 'redux-promise-middleware'

const store = createStore(rootReducer,
 applyMiddleware(
 	//Todo : 
    promiseMiddleware()
    )
 )
ReactDOM.render(
<div>
  <Provider store={store}>
    <App1 />
  </Provider></div>,
  document.getElementById('root1')
);