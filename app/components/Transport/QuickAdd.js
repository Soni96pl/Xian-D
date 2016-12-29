import React, { Component, PropTypes } from 'react';
import { Button } from '@blueprintjs/core';
import CarrierInput from '../Carriers/CarrierInput';
import StationInput from '../Stations/StationInput';
import carrierShape from '../../shapes/carrier';
import stationShape from '../../shapes/station';

export default class QuickAdd extends Component {
  static propTypes = {
    addTripTransport: PropTypes.func.isRequired,
    tripId: PropTypes.string.isRequired,
    carriers: PropTypes.objectOf(carrierShape).isRequired,
    stations: PropTypes.objectOf(stationShape).isRequired,
    onChange: PropTypes.func
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
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

  handleCarrierChange(carrier) {
    this.setState({ carrier });
  }

  handleOriginChange(station) {
    this.setState({ origin: station });
  }

  handleDestinationChange(station) {
    this.setState({ destination: station });
  }

  handleSubmit(event) {
    const { tripId, addTripTransport } = this.props;
    const { router } = this.context;

    const date = new Date();
    date.setHours(12);
    date.setMinutes(0);

    const action = addTripTransport({
      tripId,
      transport: {
        mode: this.state.mode,
        carrier: this.state.carrier,
        date: date.toString(),
        duration: 0,
        departure: {
          station: this.state.origin
        },
        arrival: {
          station: this.state.destination
        }
      }
    });
    const transportId = Object.keys(action.payload.entities.transport)[0];
    router.push(`/trips/${tripId}/transport/${transportId}`);
    event.preventDefault();
  }

  render() {
    const { carriers, stations } = this.props;

    return (
      <form
        className="transport-quickadd"
        onSubmit={(e) => this.handleSubmit(e)}
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
          <CarrierInput
            carriers={carriers}
            type={this.state.mode}
            onSelect={(carrier) => this.handleCarrierChange(carrier)}
            style={{ flex: '1' }}
          />
          <StationInput
            stations={stations}
            type={this.state.mode}
            iconName="circle"
            placeholder="Origin"
            onSelect={(station) => this.handleOriginChange(station)}
            style={{ flex: '1' }}
          />
          <StationInput
            stations={stations}
            type={this.state.mode}
            iconName="moon"
            placeholder="Destination"
            onSelect={(station) => this.handleDestinationChange(station)}
            style={{ flex: '1' }}
          />
          <Button type="submit" text="Add" />
        </div>
      </form>
    );
  }
}
