// @flow
import React, { Component } from 'react';
import Sidebar from './Sidebar';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <main></main>
      </div>
    );
  }
}
