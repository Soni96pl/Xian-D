import React, { Component, PropTypes } from 'react';
import { Intent, Button } from '@blueprintjs/core';
import Dialog from '../Dialog';

export default class NewDialog extends Component {
  static propTypes = {
    addTrip: PropTypes.func.isRequired,
    opener: PropTypes.element.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    tripName: '',
    isOpen: false
  }

  toggleDialog() {
    if (this.state.isOpen) {
      this.setState({ tripName: '', isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }

  handleSubmit(event: Object) {
    const { addTrip } = this.props;
    const { router } = this.context;
    event.preventDefault();

    const trip = addTrip(this.state.tripName);
    router.push(`/trips/${trip.id}`);
    this.toggleDialog();
  }

  updateName(event) {
    this.setState({ tripName: event.target.value });
  }

  render() {
    const { opener } = this.props;
    return (
      <Dialog
        opener={opener}
        onInteraction={() => this.toggleDialog()}
        isOpen={this.state.isOpen}
      >
        <div className="pt-dialog-body">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <h6>Create a new trip</h6>
            <input
              className="pt-input"
              style={{ width: '100%' }}
              autoFocus
              value={this.state.tripName}
              onChange={(e) => this.updateName(e)}
            />
          </form>
        </div>
      </Dialog>
    );
  }
}
