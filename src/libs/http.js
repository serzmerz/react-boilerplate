import axios from 'axios';
import { store } from 'index';
import BrowserStorage from 'libs/browserStorage';
import get from 'lodash/get';

export const BASE_URL = 'http://somewere/api';

/** @type {AxiosInstance} */
const http = axios.create({
  baseURL: BASE_URL,
});

function addAuthenticateHeaderIfTokenExist(state, config) {
  const token = selectEnvToken(state);

  // eslint-disable-next-line no-param-reassign
  if (token) config.headers.Authorization = `Bearer ${token}`;
}

function logoutOnUnauthorizedError(state, error) {
  if (get(error, 'response.status') === 401) {
    store.dispatch(USER_UNAUTHORIZED());
    BrowserStorage.clear();
  }
}


http.interceptors.request.use((config) => {
  const state = store.getState();

  addAuthenticateHeaderIfTokenExist(state, config);

  return config;
});

http.interceptors.response.use(undefined, (error) => {
  const state = store.getState();

  logoutOnUnauthorizedError(state, error);

  return Promise.reject(error);
});
