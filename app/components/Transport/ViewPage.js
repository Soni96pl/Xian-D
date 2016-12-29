import React, { Component, PropTypes } from 'react';
import BasicInfo from './BasicInfo';
import { segmentShape } from '../../shapes/transport';

export default class ViewPage extends Component {
  static propTypes = {
    updateSegment: PropTypes.func.isRequired,
    segment: segmentShape
  };

  render() {
    const { segment } = this.props;

    return (
      <div>
        <h2>{segment.carrier.name}</h2>
        <BasicInfo segment={segment} />
      </div>
    );
  }
}
