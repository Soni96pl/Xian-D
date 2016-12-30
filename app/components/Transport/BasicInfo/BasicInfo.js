import React, { Component } from 'react';
import { If, Then, Else } from 'react-if';
import ShowBasicInfo from './ShowBasicInfo';
import { segmentShape } from '../../../shapes/transport';

export default class BasicInfo extends Component {
  static propTypes = {
    segment: segmentShape
  };

  state = {
    edit: false
  }

  render() {
    const { segment } = this.props;
    const { edit } = this.state;

    return (
      <If condition={edit === false}>
        <Then>
          <ShowBasicInfo
            segment={segment}
            onEdit={() => this.setState({ edit: !edit })}
          />
        </Then>
        <Else>
          // Implement EditBasicInfo
        </Else>
      </If>
    );
  }
}
