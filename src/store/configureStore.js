import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from 'reducers';
import type { ReduxState } from 'types';

const isNotProduction = process.env.NODE_ENV !== 'production';
const enableDevTools =
  isNotProduction &&
  'undefined' !== typeof window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middleware = [thunk];

if (isNotProduction) {
  const { logger } = require('redux-logger');

  middleware.push(logger);
}

const composeEnhancers = enableDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export default function configureStore(initialState: ReduxState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    composeEnhancers(autoRehydrate())
  );

  persistStore(store);

  return store;
}
