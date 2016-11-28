import React, { Component } from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';

export default class Sidebar extends Component {
  render() {
    return (
      <Menu className="sidebar pt-dark">
        <MenuDivider title="Places" />
        <MenuItem iconName="geosearch" text="Search" label="⌘S" />
        <MenuItem iconName="globe" text="View" label="⌘M" />
        <MenuDivider title="Trips" />
        <MenuItem iconName="add" text="New trip" label="⌘N" />
        <div className="pt-bottom">
          <MenuDivider />
          <MenuItem iconName="cog" text="Settings" />
        </div>
      </Menu>
    );
  }
}
