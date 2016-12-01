// @flow
import React, { Component, PropTypes } from 'react';

import styles from './New.css';

export default class New extends Component {
  static propTypes = {
    addTrip: PropTypes.func.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = { name: '' }

  handleSubmit(event: Object) {
    const { addTrip } = this.props;
    const { router } = this.context;
    event.preventDefault();
    const trip = addTrip(this.state.name);
    router.push(`/trips/${trip.id}`);
  }

  render() {
    return (
      <div className={styles.newTripWrapper}>
        <form className={styles.newTripForm} onSubmit={(e) => this.handleSubmit(e)}>
          <h2 className={styles.newTripHeader}>Let&#39;s start with a name for your new trip.</h2>
          <div className={`${styles.newTripName} pt-input-group`}>
            <input className="pt-input" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            <button className="pt-button pt-minimal pt-intent-primary pt-icon-arrow-right"></button>
          </div>
        </form>
      </div>
    );
  }
}
