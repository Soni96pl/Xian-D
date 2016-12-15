import React, { Component, PropTypes } from 'react';
import strftime from 'strftime';
import { segmentShape } from '../../shapes/transport';

export default class Segment extends Component {
  static propTypes = {
    segment: segmentShape
  }

  render() {
    const { segment } = this.props;
    return (
      <div className="transport-menu-segment">
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
