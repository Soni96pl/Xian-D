// @flow
export const ADD_TRIP = 'ADD_TRIP';

let tripId = 0;

export function addTrip(name: string) {
  tripId += 1;
  return {
    type: ADD_TRIP,
    id: tripId,
    name
  };
}
