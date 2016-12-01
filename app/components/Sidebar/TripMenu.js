import React, { PropTypes, Component } from 'react';
import { MenuDivider, MenuItem } from '@blueprintjs/core';
import SidebarMenu from './SidebarMenu';
import TripMenuItem from './TripMenuItem';

export default class TripMenu extends Component {
  static propTypes = {
    trips: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    this.context.router.push('/trips/new');
  }

  render() {
    const { trips } = this.props;
    return (
      <SidebarMenu>
        <MenuDivider title="Trips" />
        {trips.map(trip =>
          <TripMenuItem id={trip.id} name={trip.name} />
        )}
        <MenuItem
          iconName="add"
          text="New trip"
          label="⌘N"
          onClick={() => this.handleClick()}
        />
      </SidebarMenu>
    );
  }
}
