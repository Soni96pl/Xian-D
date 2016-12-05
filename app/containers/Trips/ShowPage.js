import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tripsShape } from '../../shapes/trips';
import Status from '../../components/Status';


class ShowPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      tripId: PropTypes.string
    }).isRequired,
    trips: tripsShape.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  editClick() {
    const { tripId } = this.props.params;
    this.context.router.push(`/trips/${tripId}/edit`);
  }

  render() {
    const { tripId } = this.props.params;
    const trip = this.props.trips.filter((t) => t.id === parseInt(tripId, 10))[0];
    return (
      <Status title={trip.name} />
    );
  }
}


function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, undefined)(ShowPage);
