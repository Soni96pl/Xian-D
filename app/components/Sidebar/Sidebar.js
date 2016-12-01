import React, { Component } from 'react';
import { MenuDivider, MenuItem } from '@blueprintjs/core';
import SidebarMenu from './SidebarMenu';
import TripMenu from '../../containers/Sidebar/TripMenu';
import styles from './Sidebar.css';


export default class Sidebar extends Component {
  render() {
    return (
      <div className={`${styles.sidebar} pt-dark`}>
        <SidebarMenu>
          <MenuDivider className={styles.sidebarMenuDivider} title="Places" />
          <MenuItem iconName="geosearch" text="Search" label="⌘S" />
          <MenuItem iconName="globe" text="View" label="⌘M" />
        </SidebarMenu>
        <TripMenu />
        <SidebarMenu className={styles.sidebarBottom}>
          <MenuDivider />
          <MenuItem iconName="cog" text="Settings" />
        </SidebarMenu>
      </div>
    );
  }
}
