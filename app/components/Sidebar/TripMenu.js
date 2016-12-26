import React, { Component, PropTypes } from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import TripMenuItem from './TripMenuItem';
import TripsNewDialog from '../../containers/Trips/NewDialog';
import { normalizedTripShape } from '../../shapes/trips';

export default class TripMenu extends Component {
  static propTypes = {
    trips: PropTypes.objectOf(normalizedTripShape).isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
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
          {Object.keys(trips).map(id =>
            <TripMenuItem
              key={`trip-${id}`}
              id={id}
              name={trips[id].name}
            />
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
