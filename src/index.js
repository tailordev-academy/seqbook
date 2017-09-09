/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Seqbook from 'Seqbook';
import registerServiceWorker from './registerServiceWorker';
import configureStore from 'store/configureStore';

const preloadedState = window.__PRELOADED_STATE__ || {};
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Seqbook />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
