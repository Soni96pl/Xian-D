import React, { Component, PropTypes } from 'react';

export default class TransportMenu extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
  }

  render() {
    const { children } = this.props;
    return (
      <div className="segments">
        {children}
      </div>
    );
  }
}
