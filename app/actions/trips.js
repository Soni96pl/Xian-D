import tripSchema from '../schema/trips';

export const ADD_TRIP = 'ADD_TRIP';
export const ADD_TRANSPORT = 'ADD_TRANSPORT';
export const ADD_TRIP_TRANSPORT = 'ADD_TRIP_TRANSPORT';

export function addTrip({ name }) {
  return {
    type: ADD_TRIP,
    payload: {
      name,
      transport: []
    },
    meta: {
      schema: tripSchema
    }
  };
}

export function addTripTransport({ tripId, transport }) {
  return {
    type: ADD_TRIP_TRANSPORT,
    payload: {
      id: tripId,
      transport: [transport]
    },
    meta: {
      schema: tripSchema
    }
  };
}
