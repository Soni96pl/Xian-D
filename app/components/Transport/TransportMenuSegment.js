import React, { Component, PropTypes } from 'react';
import strftime from 'strftime';
import { segmentShape } from '../../shapes/transport';

export default class TransportMenuSegment extends Component {
  static propTypes = {
    tripId: PropTypes.string.isRequired,
    segment: segmentShape.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const { tripId, segment } = this.props;
    const { router } = this.context;
    const isActive = router.isActive(`trips/${tripId}/transport/${segment.id}`);

    return (
      <div
        className={`transport-menu-segment ${isActive && 'active'}`}
        onClick={() => router.push(`/trips/${tripId}/transport/${segment.id}`)}
      >
        <div className="segment-data">
          <div className="segment-date">
            <strong>{strftime('%-d %B', segment.date)}</strong>
          </div>
          <div className="segment-places">
            {segment.departure.station.name} <span className="pt-icon pt-icon-chevron-right" /> {segment.arrival.station.name}
          </div>
        </div>
      </div>
    );
  }
}
