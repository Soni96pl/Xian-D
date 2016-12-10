import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tripsByIdShape } from '../../shapes/trips';
import View from '../../components/Trips/View';

class ViewPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      tripId: PropTypes.string
    }).isRequired,
    tripsById: tripsByIdShape.isRequired
  }

  render() {
    const { tripId } = this.props.params;
    const trip = this.props.tripsById[parseInt(tripId, 10)];
    return <View trip={trip} />;
  }
}


function mapStateToProps(state) {
  return {
    tripsById: state.trips.tripsById
  };
}

export default connect(mapStateToProps, undefined)(ViewPage);
