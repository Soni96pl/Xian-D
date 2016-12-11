import React, { Component } from 'react';
import { tripShape } from '../../shapes/trips';
import Status from '../Status';
import QuickAdd from '../../containers/Transport/QuickAdd';

export default class View extends Component {
  static propTypes = {
    trip: tripShape
  }

  state = {
    departure: new Date()
  }

  handleDepartureChange(departure) {
    this.setState({ departure });
  }

  render() {
    const { trip } = this.props;
    return (
      <div>
        <Status title={trip.name} />
        <QuickAdd tripId={trip.id} />
      </div>
    );
  }
}
