import React, { Component, PropTypes } from 'react';

const icons = {
  BUS: 'fa-bus',
  CAR: 'fa-car',
  FERRY: 'fa-ship',
  FLIGHT: 'fa-plane',
  TRAIN: 'fa-train'
};

export default class TransportModeIcon extends Component {
  static propTypes = {
    mode: PropTypes.string.isRequired,
    size: PropTypes.number
  }

  render() {
    const { mode } = this.props;
    let { size } = this.props;
    size = `fa-${size || 1}x`;

    return (
      <i className={`fa ${size} ${icons[mode]}`} />
    );
  }
}
