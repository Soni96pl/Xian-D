import React, { Component } from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar pt-dark">
        <Menu>
          <MenuDivider title="Places" />
          <MenuItem iconName="geosearch" text="Search" label="⌘S" />
          <MenuItem iconName="globe" text="View" label="⌘M" />
          <MenuDivider title="Trips" />
          <MenuItem iconName="add" text="New trip" label="⌘N" />
        </Menu>
        <Menu className="sidebar-bottom">
          <MenuDivider />
          <MenuItem iconName="cog" text="Settings" />
        </Menu>
      </div>
    );
  }
}
