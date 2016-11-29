import { connect } from 'react-redux';
import TripMenu from '../components/TripMenu';

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps, undefined)(TripMenu);
