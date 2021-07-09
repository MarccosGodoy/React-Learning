import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import allReducers from './reducers' //No hace falta poner "index.js" por que automaticamente al no declarar un nombre es lo que va a buscar webpack
import {Provider} from 'react-redux'

const store = createStore(allReducers)




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


