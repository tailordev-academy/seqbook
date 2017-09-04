import { combineReducers } from 'redux';

import app from './app';
import ensembl from './ensembl';

export default combineReducers({
  app,
  ensembl,
});
