import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tripsShape } from '../../shapes/trips';


class ShowPage extends Component {
  static propTypes = {
    params: PropTypes.arrayOf(PropTypes.shape({
      tripId: PropTypes.string
    }).isRequired).isRequired,
    trips: tripsShape.isRequired
  }

  render() {
    const { tripId } = this.props.params;
    const trip = this.props.trips.filter((t) => t.id === parseInt(tripId, 10))[0];
    return (
      <h2>{trip.name}</h2>
    );
  }
}


function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, undefined)(ShowPage);
