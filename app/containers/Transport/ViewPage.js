import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { denormalize } from 'denormalizr';
import reducerShape from '../../shapes/reducer';
import transportSchema from '../../schema/transport';
import { transportShape } from '../../shapes/transport';
import View from '../../components/Transport/ViewPage';

class ViewPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      segmentId: PropTypes.string
    }).isRequired,
    reducer: reducerShape.isRequired,
  }

  render() {
    const { segmentId } = this.props.params;
    const { reducer } = this.props;
    const segment = denormalize(segmentId, reducer, transportSchema);
    return <View segment={segment} />;
  }
}


function mapStateToProps(state) {
  return {
    reducer: state.trips
  };
}

export default connect(mapStateToProps, undefined)(ViewPage);
