import React, { Component, PropTypes } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { tripShape } from '../../shapes/trips';

export default class TripMenuItem extends Component {
  static propTypes = tripShape;

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const { id, name } = this.props;
    const { router } = this.context;
    return (
      <div>
        <MenuItem
          className={router.isActive(`trips/${id}`, true) && 'active'}
          text={name}
          onClick={() => router.push(`/trips/${id}`)}
        />
        {router.isActive(`trips/${id}`) &&
          <Menu>
            <MenuItem
              className={router.isActive(`trips/${id}/transport`) && 'active'}
              text="Transport"
              onClick={() => router.push(`/trips/${id}/transport`)}
            />
            <MenuItem
              text="Lodging"
              onClick={() => router.push(`/trips/${id}/lodging`)}
            />
          </Menu>
        }
      </div>
    );
  }
}
