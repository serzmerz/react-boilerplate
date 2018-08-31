import invariant from 'invariant';

function serialize(value) {
  return JSON.stringify(value);
}

function parse(value) {
  if (!value) return value;

  try {
    return JSON.parse(value);
  } catch (e) {
    invariant(true, e);
    return undefined;
  }
}

/* eslint-disable class-methods-use-this */
export default class BrowserStorage {
  static getType() {
    return window.localStorage.getItem('typeStorage') || 'localStorage';
  }

  static setType(type) {
    window.localStorage.setItem('typeStorage', type);
  }

  static clear() {
    window[BrowserStorage.getType()].clear();
  }

  static setItem(key, value, withSerialize = true) {
    return window[BrowserStorage.getType()].setItem(key, withSerialize ? serialize(value) : value);
  }

  static getItem(key, withParse = true) {
    const item = window[BrowserStorage.getType()].getItem(key);
    return withParse ? parse(item) : item;
  }

  static removeItem(key) {
    window[BrowserStorage.getType()].removeItem(key);
  }
}
