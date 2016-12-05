import { connect } from 'react-redux';
import View from '../../components/Trips/View';

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, undefined)(View);
