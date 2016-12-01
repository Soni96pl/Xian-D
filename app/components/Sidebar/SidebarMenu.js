import React, { Component, PropTypes } from 'react';
import { Menu } from '@blueprintjs/core';
import styles from './Sidebar.css';

export default class SidebarMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  }

  render() {
    const { children } = this.props;
    let className = styles.sidebarMenu;
    if (this.props.className) className += ` ${this.props.className}`;
    return (
      <Menu className={className}>{children}</Menu>
    );
  }
}
