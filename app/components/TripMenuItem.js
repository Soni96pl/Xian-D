import React, { PropTypes } from 'react';
import { MenuItem } from '@blueprintjs/core';

function TripMenuItem({ id, name }) {
  return (
    <MenuItem key={id} iconName="airplane" text={name} label="⌘1" />
  );
}

TripMenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default TripMenuItem;
