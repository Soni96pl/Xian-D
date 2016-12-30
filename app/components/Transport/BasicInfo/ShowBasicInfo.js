import React, { Component, PropTypes } from 'react';
import strftime from 'strftime';
import { Button } from '@blueprintjs/core';
import TransportModeIcon from '../TransportModeIcon';
import CalendarCard from '../../CalendarCard';
import { segmentShape } from '../../../shapes/transport';

export default class ShowBasicInfo extends Component {
  static propTypes = {
    segment: segmentShape,
    onEdit: PropTypes.func
  }

  render() {
    const { segment, onEdit } = this.props;
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
          <TransportModeIcon mode={segment.mode} size={2} />
        </div>
        <div className="destination">
          <h5>{segment.arrival.station.name}</h5>
          <h6>{strftime('%H:%M', arrivalDate)}</h6>
        </div>
        <div className="edit">
          <Button iconName="edit" text="Edit" onClick={onEdit} />
        </div>
      </div>
    );
  }
}
