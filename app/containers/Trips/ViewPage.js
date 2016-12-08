import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tripsShape } from '../../shapes/trips';
import View from '../../components/Trips/View';

class ViewPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      tripId: PropTypes.string
    }).isRequired,
    trips: tripsShape.isRequired
  }

  render() {
    const { tripId } = this.props.params;
    const trip = this.props.trips.filter((t) => t.id === parseInt(tripId, 10))[0];
    return <View trip={trip} />;
  }
}


function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, undefined)(ViewPage);
