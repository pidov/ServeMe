import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'
import quotesApp from './reducers'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
let store = createStoreWithMiddleware(quotesApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
