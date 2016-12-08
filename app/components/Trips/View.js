import React, { Component } from 'react';
import { tripShape } from '../../shapes/trips';
import Status from '../../components/Status';

export default class View extends Component {
  static propTypes = {
    trip: tripShape.isRequired
  }

  render() {
    const { trip } = this.props;
    return (
      <div>
        <Status title={trip.name} />
      </div>
    );
  }
}
