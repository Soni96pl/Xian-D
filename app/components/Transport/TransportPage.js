import React, { Component, PropTypes } from 'react';
import { tripShape } from '../../shapes/trips';
import { transportShape } from '../../shapes/transport';
import Status from '../Status';
import TransportMenu from './TransportMenu';

export default class Transport extends Component {
  static propTypes = {
    children: PropTypes.element,
    trip: tripShape,
    transport: transportShape
  }

  render() {
    const { children, trip, transport } = this.props;
    return (
      <div className="transport-page" key={`trip-${trip.id}-transport`}>
        <Status title={trip.name} />
        <TransportMenu tripId={trip.id} transport={trip.transport.map(id => transport[id])} />
        <main>
          {children}
        </main>
      </div>
    );
  }
}
