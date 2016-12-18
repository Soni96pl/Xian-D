import React, { Component, PropTypes } from 'react';
import { tripShape } from '../../shapes/trips';
import Status from '../Status';
import TransportMenu from './TransportMenu';

export default class Transport extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    trip: tripShape.isRequired
  }

  render() {
    const { children, trip } = this.props;
    return (
      <div className="transport-page" key={`trip-${trip.id}-transport`}>
        <Status title={trip.name} />
        <TransportMenu tripId={trip.id} transport={trip.transport} />
        <main>
          {children}
        </main>
      </div>
    );
  }
}
