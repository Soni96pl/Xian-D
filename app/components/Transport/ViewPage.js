import React, { Component, PropTypes } from 'react';
import { DateInput } from '@blueprintjs/datetime';
import { segmentShape } from '../../shapes/transport';

const icons = {
  BUS: 'fa-bus',
  CAR: 'fa-car',
  FERRY: 'fa-ship',
  FLIGHT: 'fa-plane',
  TRAIN: 'fa-train'
};

export default class ViewPage extends Component {
  static propTypes = {
    updateSegment: PropTypes.func.isRequired,
    segment: segmentShape
  };

  handleDepartureChange(date) {
    const { updateSegment, segment } = this.props;
    updateSegment({
      id: segment.id,
      date
    });
  }

  render() {
    const { segment } = this.props;
    return (
      <div>
        <h2>{segment.carrier.name}</h2>
        <h5><i className={`fa ${icons[segment.mode]}`} /> {segment.departure.station.name} <span className="pt-icon pt-icon-chevron-right" /> {segment.arrival.station.name}</h5>
        <DateInput
          value={segment.date}
          onChange={(date) => this.handleDepartureChange(date)}
        />
      </div>
    );
  }
}
