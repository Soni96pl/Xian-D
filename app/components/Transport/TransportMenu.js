import React, { Component, PropTypes } from 'react';
import { transportShape } from '../../shapes/transport';
import TransportMenuSegment from './TransportMenuSegment';

export default class TransportMenu extends Component {
  static propTypes = {
    tripId: PropTypes.string.isRequired,
    transport: transportShape.isRequired
  }

  render() {
    const { tripId, transport } = this.props;
    return (
      <div className="transport-menu">
        {transport.map(segment =>
          <TransportMenuSegment
            key={`trip-menu-segment-${segment.id}`}
            tripId={tripId}
            segment={segment}
          />
        )}
      </div>
    );
  }
}
