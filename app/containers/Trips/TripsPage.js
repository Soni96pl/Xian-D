// @flow
import React, { Component, PropTypes } from 'react';

export default class IndexPage extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}
