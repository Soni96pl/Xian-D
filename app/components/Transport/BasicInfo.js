import React, { Component } from 'react';
import strftime from 'strftime';
import CalendarCard from '../CalendarCard';
import { segmentShape } from '../../shapes/transport';

const icons = {
  BUS: 'fa-bus',
  CAR: 'fa-car',
  FERRY: 'fa-ship',
  FLIGHT: 'fa-plane',
  TRAIN: 'fa-train'
};

export default class BasicInfo extends Component {
  static propTypes = {
    segment: segmentShape
  };

  render() {
    const { segment } = this.props;
    const departureDate = new Date(segment.date);
    const arrivalDate = new Date(departureDate);
    arrivalDate.setMinutes(arrivalDate.getMinutes() + segment.duration);

    return (
      <div className="basic-info">
        <CalendarCard date={departureDate} />
        <div className="origin">
          <h5>{segment.departure.station.name}</h5>
          <h6>{strftime('%H:%M', departureDate)}</h6>
        </div>
        <div className="icon">
          <i className={`fa fa-2x ${icons[segment.mode]}`} />
        </div>
        <div className="destination">
          <h5>{segment.arrival.station.name}</h5>
          <h6>{strftime('%H:%M', arrivalDate)}</h6>
        </div>
      </div>
    );
  }
}
