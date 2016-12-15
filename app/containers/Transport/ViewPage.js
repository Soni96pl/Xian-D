import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { transportShape } from '../../shapes/transport';
import View from '../../components/Transport/ViewPage';

class ViewPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      segmentId: PropTypes.string
    }).isRequired,
    transport: transportShape.isRequired,
  }

  render() {
    const { segmentId } = this.props.params;
    const { transport } = this.props;
    const segment = transport[parseInt(segmentId, 10)];
    return <View segment={segment} />;
  }
}


function mapStateToProps(state) {
  return {
    transport: state.trips.transport
  };
}

export default connect(mapStateToProps, undefined)(ViewPage);
