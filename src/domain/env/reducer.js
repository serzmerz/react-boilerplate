import I from 'immutable';
import BrowserStorage from 'libs/browserStorage';

export const API_TOKEN_KEY = 'apiToken';

function getInitialState() {
  const token = BrowserStorage.getItem(API_TOKEN_KEY);
  return I.fromJS({
    [API_TOKEN_KEY]: token,
    identity: {},
    isAuthorized: Boolean(token),
  });
}

const initialState = getInitialState();

export const reducer = {
  env(state = initialState, { type, payload }) {
    switch (type) {
      default:
        return state;
    }
  },
};
