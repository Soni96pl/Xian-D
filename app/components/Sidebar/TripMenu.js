import React, { Component, PropTypes } from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import TripMenuItem from './TripMenuItem';
import TripsNewDialog from '../../containers/Trips/NewDialog';
import { tripsByIdShape } from '../../shapes/trips';

export default class TripMenu extends Component {
  static propTypes = {
    trips: PropTypes.arrayOf(PropTypes.number),
    tripsById: tripsByIdShape.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = { isDialogOpen: false }

  toggleDialog() {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  }

  render() {
    const { trips, tripsById } = this.props;
    return (
      <div>
        <Menu>
          <MenuDivider title="Trips" />
          {trips.map(id =>
            <TripMenuItem key={`trip-${id}`} id={id} name={tripsById[id].name} />
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
