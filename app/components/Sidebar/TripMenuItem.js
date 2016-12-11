import React, { Component, PropTypes } from 'react';
import { MenuItem } from '@blueprintjs/core';
import { tripShape } from '../../shapes/trips';

export default class TripMenuItem extends Component {
  static propTypes = tripShape;

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleClick() {
    const { router } = this.context;
    const { id } = this.props;
    router.push(`/trips/${id}`);
  }

  render() {
    const { id, name } = this.props;
    const { router } = this.context;
    return (
      <MenuItem
        iconName="folder-close"
        className={router.isActive(`trips/${id}`) ? 'active' : ''}
        text={name}
        label={`⌘${id}`}
        onClick={() => this.handleClick()}
      />
    );
  }
}
