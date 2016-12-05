import React, { Component, PropTypes } from 'react';

export default class Status extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    const { title } = this.props;
    return (
      <div className="status">
        <strong>
          {title}
        </strong>
      </div>
    );
  }
}
