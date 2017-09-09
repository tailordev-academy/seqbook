/* @flow */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'Home';
import About from 'About';
import Header from 'Header';
import NotFound from 'NotFound';

export default () => (
  <div>
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
