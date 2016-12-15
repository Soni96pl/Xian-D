import React, { Component } from 'react';
import { transportShape } from '../../shapes/transport';
import TransportMenuSegment from './TransportMenuSegment';

export default class TransportMenu extends Component {
  static propTypes = {
    transport: transportShape
  }

  render() {
    const { transport } = this.props;
    return (
      <div className="transport-menu">
        {transport.map(segment =>
          <TransportMenuSegment segment={segment} />
        )}
      </div>
    );
  }
}
