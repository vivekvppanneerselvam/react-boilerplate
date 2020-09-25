import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.slim'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './app/reducers/reducers'
import { Router } from "react-router-dom";
import  * as helpers from './app/helpers'
import App from './app/App';
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//export const history = createHistory();
render(
  <Provider store={store}>
      <Router history={helpers.history}>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
