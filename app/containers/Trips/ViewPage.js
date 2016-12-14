import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tripsShape } from '../../shapes/trips';
import { transportShape } from '../../shapes/transport';
import View from '../../components/Trips/View';

class ViewPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      tripId: PropTypes.string
    }).isRequired,
    trips: tripsShape.isRequired,
    transport: transportShape.isRequired
  }

  render() {
    const { tripId } = this.props.params;
    const { trips, transport } = this.props;
    const trip = trips[parseInt(tripId, 10)];
    return <View trip={trip} transport={transport} />;
  }
}


function mapStateToProps(state) {
  return {
    trips: state.trips.trips,
    transport: state.trips.transport
  };
}

export default connect(mapStateToProps, undefined)(ViewPage);
