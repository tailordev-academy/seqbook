import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from 'App';
import About from 'About';
import Header from 'Header';
import registerServiceWorker from './registerServiceWorker';
import configureStore from 'store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
