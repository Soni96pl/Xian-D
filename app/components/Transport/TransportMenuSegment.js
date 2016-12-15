import React, { Component, PropTypes } from 'react';
import strftime from 'strftime';
import { segmentShape } from '../../shapes/transport';

export default class Segment extends Component {
  static propTypes = {
    tripId: PropTypes.number,
    segment: segmentShape
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleClick() {
    const { tripId, segment } = this.props;
    const { router } = this.context;
    router.push(`/trips/${tripId}/transport/${segment.id}`);
  }

  render() {
    const { tripId, segment } = this.props;
    const { router } = this.context;
    const isActive = router.isActive(`trips/${tripId}/transport/${segment.id}`);

    return (
      <div
        className={`transport-menu-segment ${isActive && 'active'}`}
        onClick={() => this.handleClick()}
      >
        <div className="segment-data">
          <div className="segment-date">
            <strong>{strftime('%d %B %H:%M', segment.departure.time)}</strong>
          </div>
          <div className="segment-places">
            {segment.departure.station} <span className="pt-icon pt-icon-chevron-right" /> {segment.arrival.station}
          </div>
        </div>
      </div>
    );
  }
}
