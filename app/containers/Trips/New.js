import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TripsNew from '../../components/Trips/New';
import * as TripsActions from '../../actions/trips';


function mapDispatchToProps(dispatch) {
  return bindActionCreators(TripsActions, dispatch);
}

export default connect(undefined, mapDispatchToProps)(TripsNew);
