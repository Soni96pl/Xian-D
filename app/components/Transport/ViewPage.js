import React, { Component } from 'react';
import { segmentShape } from '../../shapes/transport';

export default class ViewPage extends Component {
  static propTypes = {
    segment: segmentShape
  };

  render() {
    const { segment } = this.props;
    return (
      <span>Segment #{segment.id}</span>
    );
  }
}
