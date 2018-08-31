import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { makeCancelable } from 'libs/helpers';

export class AsyncComponent extends PureComponent {
  static propTypes = {
    render: PropTypes.func.isRequired,
    moduleKey: PropTypes.string,
    renderProps: PropTypes.shape(),
  }

  static defaultProps = {
    moduleKey: 'default',
  }

  state = {
    component: null,
  }

  constructor(props) {
    super(props);
    const { promise, cancel } = makeCancelable(props.render());
    this.cancel = cancel;
    promise
      .then(module => this.setState({ component: module[props.moduleKey] }))
      .catch(err => (err.isCanceled ? console.warn('Component was canceled') : console.error(err)));
  }

  componentWillUnmount() {
    this.cancel();
  }

  render() {
    const { renderProps } = this.props;
    const { component: Component } = this.state;

    return Component && <Component {...renderProps} />;
  }
}
