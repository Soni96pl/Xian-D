import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { denormalize } from 'denormalizr';
import reducerShape from '../../shapes/reducer';
import transportSchema from '../../schema/transport';
import View from '../../components/Transport/ViewPage';
import * as TransportActions from '../../actions/transport';

class ViewPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      segmentId: PropTypes.string
    }).isRequired,
    updateSegment: PropTypes.func.isRequired,
    reducer: reducerShape.isRequired,
  }

  render() {
    const { segmentId } = this.props.params;
    const { reducer, updateSegment } = this.props;
    const segment = denormalize(segmentId, reducer, transportSchema);
    return <View updateSegment={updateSegment} segment={segment} />;
  }
}


function mapStateToProps(state) {
  return {
    reducer: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TransportActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
