import React, { Component } from 'react';
import { MenuItem } from '@blueprintjs/core';
import { tripShape } from '../../shapes/trips';

export default class TripMenuItem extends Component {
  static propTypes = tripShape.isRequired;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleClick() {
    this.context.router.push(`/trips/${this.props.id}`);
  }

  render() {
    const { id, name } = this.props;
    return (
      <MenuItem
        iconName="folder-close"
        text={name}
        label={`⌘${id}`}
        onClick={() => this.handleClick()}
      />
    );
  }
}
