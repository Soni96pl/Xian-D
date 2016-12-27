import React, { Component } from 'react';
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
    segment: segmentShape
  };

  render() {
    const { segment } = this.props;
    return (
      <div>
        <h2>{segment.carrier.name}</h2>
        <h5><i className={`fa ${icons[segment.mode]}`} /> {segment.departure.station.name} <span className="pt-icon pt-icon-chevron-right" /> {segment.arrival.station.name}</h5>
      </div>
    );
  }
}
