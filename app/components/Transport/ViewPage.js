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

  static getMinDate() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    date.setMonth(1, 1);
    return date;
  }

  static getMaxDate() {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 5);
    date.setMonth(11, 31);
    return date;
  }

  handleDepartureChange(date) {
    const { updateSegment, segment } = this.props;
    updateSegment({
      id: segment.id,
      date
    });
  }

  render() {
    const { segment } = this.props;
    const minDate = ViewPage.getMinDate();
    const maxDate = ViewPage.getMaxDate();

    return (
      <div>
        <h2>{segment.carrier.name}</h2>
        <h5><i className={`fa ${icons[segment.mode]}`} /> {segment.departure.station.name} <span className="pt-icon pt-icon-chevron-right" /> {segment.arrival.station.name}</h5>
        <DateInput
          value={segment.date}
          minDate={minDate}
          maxDate={maxDate}
          onChange={(date) => this.handleDepartureChange(date)}
        />
      </div>
    );
  }
}
