import React, { Component, PropTypes } from 'react';

export default class Transport extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
  }

  render() {
    const { children } = this.props;
    return (
      <div className="segments">
        <h4><span className="pt-icon pt-icon-airplane"></span> Transport</h4>
        {children}
      </div>
    );
  }
}
