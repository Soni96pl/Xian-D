// @flow
import React, { Component, PropTypes } from 'react';
import Sidebar from '../components/Sidebar';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Sidebar />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
