import { AsyncComponent } from 'components/hoc/AsyncComponent';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ivan',
    };
  }

  render() {
    const { name } = this.state;
    return <AsyncComponent render={() => import('components/HelloWorld')} renderProps={{ title: name }} />;
  }
}

// noinspection JSUnresolvedVariable
export default hot(module)(App);
