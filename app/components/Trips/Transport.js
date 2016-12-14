import React, { Component } from 'react';
import { tripShape } from '../../shapes/trips';
import { transportShape } from '../../shapes/transport';
import Status from '../Status';
import TransportMenu from '../Transport/TransportMenu';
import Segment from '../Transport/Segment';

export default class Transport extends Component {
  static propTypes = {
    trip: tripShape,
    transport: transportShape
  }

  render() {
    const { trip, transport } = this.props;
    return (
      <div key={`trip-${trip.id}-transport`}>
        <Status title={trip.name} />
        <TransportMenu>
          {trip.transport.map(id =>
            <Segment
              origin={transport[id].departure.station}
              destination={transport[id].arrival.station}
              departure={transport[id].departure.time}
            />
          )}
        </TransportMenu>
      </div>
    );
  }
}
