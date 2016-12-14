import React, { Component, PropTypes } from 'react';
import strftime from 'strftime';

export default class Segment extends Component {
  static propTypes = {
    origin: PropTypes.string,
    destination: PropTypes.string,
    departure: PropTypes.instanceOf(Date)
  }

  render() {
    const { departure, origin, destination } = this.props;
    return (
      <div className="segment-small pt-card">
        <div className="segment-date">
          <strong>{strftime('%d %B %H:%M', departure)}</strong>
        </div>
        <div className="segment-places">
          {origin} <span className="pt-icon pt-icon-chevron-right" /> {destination}
        </div>
      </div>
    );
  }
}
