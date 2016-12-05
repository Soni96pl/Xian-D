import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TripsNewDialog from '../../components/Trips/NewDialog';
import * as TripsActions from '../../actions/trips';


function mapDispatchToProps(dispatch) {
  return bindActionCreators(TripsActions, dispatch);
}

export default connect(undefined, mapDispatchToProps)(TripsNewDialog);
