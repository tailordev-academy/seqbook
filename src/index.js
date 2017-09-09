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

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Seqbook />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
