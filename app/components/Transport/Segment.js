import React, { Component, PropTypes } from 'react';
import { Button } from '@blueprintjs/core';
import strftime from 'strftime';

export default class Segment extends Component {
  static propTypes = {
    origin: PropTypes.string,
    destination: PropTypes.string,
    departure: PropTypes.instanceOf(Date),
    mode: PropTypes.string
  }

  render() {
    const { departure, origin, destination, mode } = this.props;
    return (
      <div className="segment-small pt-card">
        <div className="ticket-date">
          <strong>{strftime('%A', departure)}</strong><br />
          {strftime('%d %B %H:%M', departure)}
        </div>
        <div className="segment-places">
          {origin} <span className="pt-icon pt-icon-chevron-right" /> {destination}
        </div>
        <div className="segment-mode">{mode}</div>
        <div className="segment-controls">
          <Button text="Details" />
        </div>
      </div>
    );
  }
}
