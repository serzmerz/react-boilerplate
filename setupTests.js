/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

class LocalStorage {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, string) {
    this.store[key] = string;
  }

  clear() {
    this.store = {};
  }
}

global.window = {
  localStorage: new LocalStorage(),
};
