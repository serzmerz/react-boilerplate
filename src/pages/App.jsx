import { AsyncComponent } from 'components/hoc/AsyncComponent';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ivan',
    };
  }

  render() {
    const { name } = this.state;
    return <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <AsyncComponent render={() => import('components/HelloWorld')} renderProps={{ title: name }} />
          </div>
        </div>
      </div>
      </>;
  }
}

// noinspection JSUnresolvedVariable
export default hot(module)(App);
