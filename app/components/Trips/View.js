import React, { Component, PropTypes } from 'react';
import { tripsShape } from '../../shapes/trips';
import Status from '../../components/Status';

export default class View extends Component {
  static propTypes = {
    params: PropTypes.shape({
      tripId: PropTypes.string
    }).isRequired,
    trips: tripsShape.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    const { tripId } = this.props.params;
    const trip = this.props.trips.filter((t) => t.id === parseInt(tripId, 10))[0];
    return (
      <div>
        <Status title={trip.name} />
      </div>
    );
  }
}
