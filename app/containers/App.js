// @flow
import React, { Component, PropTypes } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Sidebar />
        {children}
      </div>
    );
  }
}
