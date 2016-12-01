import React, { Component, PropTypes } from 'react';
import { MenuItem } from '@blueprintjs/core';

export default class TripMenuItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    const { id, name } = this.props;
    return (
      <MenuItem key={id} iconName="airplane" text={name} label="⌘1" />
    );
  }
}
