import Barn from 'barn';
import tripSchema from '../schema/trips';

export const ADD_TRIP = 'ADD_TRIP';
export const ADD_TRANSPORT = 'ADD_TRANSPORT';
export const ADD_TRIP_TRANSPORT = 'ADD_TRIP_TRANSPORT';

const barn = new Barn(localStorage);
if (barn.get('tripId') == null) barn.set('tripId', 0);

export function addTrip({ name }) {
  const tripId = barn.get('tripId') + 1;
  barn.set('tripId', tripId);
  return {
    type: ADD_TRIP,
    payload: {
      id: tripId,
      transport: [],
      name
    },
    meta: {
      schema: tripSchema
    }
  };
}

export function addTripTransport({ tripId, transport }) {
  const transportId = barn.get('transportId') + 1;
  barn.set('transportId', transportId);
  return {
    type: ADD_TRIP_TRANSPORT,
    payload: {
      id: tripId,
      transport: [
        transport
      ]
    },
    meta: {
      schema: tripSchema
    }
  };
}
