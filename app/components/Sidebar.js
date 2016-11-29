import React, { Component } from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import TripMenu from '../containers/TripMenu';


export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar pt-dark">
        <Menu>
          <MenuDivider title="Places" />
          <MenuItem iconName="geosearch" text="Search" label="⌘S" />
          <MenuItem iconName="globe" text="View" label="⌘M" />
        </Menu>
        <TripMenu />
        <Menu className="sidebar-bottom">
          <MenuDivider />
          <MenuItem iconName="cog" text="Settings" />
        </Menu>
      </div>
    );
  }
}
