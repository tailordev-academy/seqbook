import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

const isNotProduction = process.env.NODE_ENV !== 'production';

const middleware = [thunk];

if (isNotProduction) {
  const { logger } = require('redux-logger');

  middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
