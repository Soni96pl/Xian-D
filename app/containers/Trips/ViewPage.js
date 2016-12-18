import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { denormalize } from 'denormalizr';
import reducerShape from '../../shapes/reducer';
import tripSchema from '../../schema/trips';
import View from '../../components/Trips/ViewPage';

class ViewPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      tripId: PropTypes.string
    }).isRequired,
    reducer: reducerShape.isRequired,
  }

  render() {
    const { tripId } = this.props.params;
    const { reducer } = this.props;
    const trip = denormalize(tripId, reducer, tripSchema);
    return <View trip={trip} />;
  }
}


function mapStateToProps(state) {
  return {
    reducer: state.trips
  };
}

export default connect(mapStateToProps, undefined)(ViewPage);
