import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransportQuickAdd from '../../components/Transport/QuickAdd';
import * as TripsActions from '../../actions/trips';


function mapStateToProps(state) {
  return {
    carriers: state.trips.carriers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TripsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TransportQuickAdd);
