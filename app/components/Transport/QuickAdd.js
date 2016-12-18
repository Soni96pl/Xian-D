import React, { Component, PropTypes } from 'react';
import { InputGroup, Button } from '@blueprintjs/core';

export default class QuickAdd extends Component {
  static propTypes = {
    addTripTransport: PropTypes.func.isRequired,
    tripId: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }

  state = {
    mode: 'FLIGHT',
    carrier: '',
    origin: '',
    destination: ''
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  handleModeChange(event) {
    this.setState({ mode: event.target.value });
  }

  handleCarrierChange(event) {
    this.setState({ carrier: event.target.value });
  }

  handleOriginChange(event) {
    this.setState({ origin: event.target.value });
  }

  handleDestinationChange(event) {
    this.setState({ destination: event.target.value });
  }

  handleSubmit() {
    const { tripId, addTripTransport } = this.props;
    addTripTransport({
      tripId,
      transport: {
        mode: this.state.mode,
        carrier: {
          name: this.state.carrier
        },
        departure: {
          station: {
            name: this.state.origin
          },
          time: null
        },
        arrival: {
          station: {
            name: this.state.destination
          },
          time: null
        }
      }
    });
  }

  render() {
    return (
      <form
        className="transport-quickadd"
        onSubmit={() => this.handleSubmit()}
      >
        <div className="pt-control-group">
          <div className="pt-select">
            <select
              value={this.state.mode}
              onChange={(e) => this.handleModeChange(e)}
            >
              <option value="BUS">Bus</option>
              <option value="CAR">Car</option>
              <option value="FERRY">Ferry</option>
              <option value="FLIGHT">Flight</option>
              <option value="TRAIN">Train</option>
            </select>
          </div>
          <InputGroup
            leftIconName="office"
            onChange={(e) => this.handleCarrierChange(e)}
            placeholder="Carrier"
            value={this.state.carrier}
            style={{ flex: '1' }}
          />
          <InputGroup
            leftIconName="circle"
            onChange={(e) => this.handleOriginChange(e)}
            placeholder="Origin"
            value={this.state.origin}
            style={{ flex: '1' }}
          />
          <InputGroup
            leftIconName="moon"
            onChange={(e) => this.handleDestinationChange(e)}
            placeholder="Destination"
            value={this.state.destination}
            style={{ flex: '1' }}
          />
          <Button type="submit" text="Add" onClick={() => this.handleSubmit()} />
        </div>
      </form>
    );
  }
}
