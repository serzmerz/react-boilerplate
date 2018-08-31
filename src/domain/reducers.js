import { combineReducers } from 'redux-immutable';

/**
 * Combine all reducers in this file and export the combined reducers.
 */

import * as env from './env';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    ...env.reducer,
    ...injectedReducers,
  });
}
