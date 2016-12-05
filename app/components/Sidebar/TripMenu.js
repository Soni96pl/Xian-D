import React, { Component } from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import TripMenuItem from './TripMenuItem';
import TripsNewDialog from '../../containers/Trips/NewDialog';
import { tripsShape } from '../../shapes/trips';

export default class TripMenu extends Component {
  static propTypes = {
    trips: tripsShape.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = { isDialogOpen: false }

  toggleDialog() {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  }

  render() {
    const { trips } = this.props;
    return (
      <div>
        <Menu>
          <MenuDivider title="Trips" />
          {trips.map(trip =>
            <TripMenuItem id={trip.id} name={trip.name} />
          )}
          <TripsNewDialog
            opener={
              <MenuItem
                iconName="add"
                text="New trip"
                label="⌘N"
              />
            }
          />
        </Menu>
      </div>
    );
  }
}
