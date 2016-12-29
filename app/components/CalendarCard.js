import React, { Component, PropTypes } from 'react';
import strftime from 'strftime';

export default class CalendarCard extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date)
  }

  render() {
    const { date } = this.props;

    return (
      <div className="calendar-card pt-card pt-elevation-1">
        <div className="calendar-card-month">
          <h5>{strftime('%-d %b', date)}</h5>
        </div>
        <div className="calendar-card-day">
          {strftime('%A', date)}
        </div>
      </div>
    );
  }
}
