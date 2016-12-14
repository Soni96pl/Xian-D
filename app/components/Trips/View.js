import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from '@blueprintjs/core';
import { tripShape } from '../../shapes/trips';
import { transportShape } from '../../shapes/transport';
import Status from '../Status';
import QuickAdd from '../../containers/Transport/QuickAdd';
import Transport from '../Transport/Transport';
import Segment from '../Transport/Segment';

export default class View extends Component {
  static propTypes = {
    trip: tripShape,
    transport: transportShape
  }

  state = {
    departure: new Date()
  }

  handleDepartureChange(departure) {
    this.setState({ departure });
  }

  render() {
    const { trip, transport } = this.props;
    return (
      <div key={`trip-view-${trip.id}`}>
        <Status title={trip.name} />
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab isDisabled={trip.transport.length === 0}>Transport</Tab>
          </TabList>
          <TabPanel>
            <main>
              <QuickAdd tripId={trip.id} />
            </main>
          </TabPanel>
          <TabPanel>
            <Transport>
              {trip.transport.map(id =>
                <Segment
                  origin={transport[id].departure.station}
                  destination={transport[id].arrival.station}
                  departure={transport[id].departure.time}
                />
              )}
            </Transport>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
