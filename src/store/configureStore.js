import { applyMiddleware, createStore } from 'redux';

import rootReducer from 'reducers';

const middleware = [];
const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
