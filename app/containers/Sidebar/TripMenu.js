import { connect } from 'react-redux';
import TripMenu from '../../components/Sidebar/TripMenu';

function mapStateToProps(state) {
  /* Pass routing state to update on route change */
  return {
    routing: state.routing,
    trips: state.trips.trips
  };
}

export default connect(mapStateToProps, undefined)(TripMenu);
