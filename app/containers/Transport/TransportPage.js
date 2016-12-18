import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { denormalize } from 'denormalizr';
import reducerShape from '../../shapes/reducer';
import tripSchema from '../../schema/trips';
import Transport from '../../components/Transport/TransportPage';

class TransportPage extends Component {
  static propTypes = {
    children: PropTypes.element,
    params: PropTypes.shape({
      tripId: PropTypes.string.isRequired
    }).isRequired,
    reducer: reducerShape.isRequired
  }

  render() {
    const { tripId } = this.props.params;
    const { children, reducer } = this.props;
    const trip = denormalize(tripId, reducer, tripSchema);
    return (
      <Transport trip={trip}>
        {children}
      </Transport>
    );
  }
}


function mapStateToProps(state) {
  return {
    reducer: state.trips
  };
}

export default connect(mapStateToProps, undefined)(TransportPage);
