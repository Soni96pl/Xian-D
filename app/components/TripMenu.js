import React, { PropTypes, Component } from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import TripMenuItem from './TripMenuItem';
import TestTripItem from '../containers/TestTripItem';

export default class TripMenu extends Component {
  static propTypes = {
    trips: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired
  };

  render() {
    const { trips } = this.props;
    return (
      <Menu>
        <MenuDivider title="Trips" />
        {trips.map(trip =>
          <TripMenuItem id={trip.id} name={trip.name} />
        )}
        <MenuItem iconName="add" text="New trip" label="⌘N" />
      </Menu>
    );
  }
}
