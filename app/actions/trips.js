// @flow
export const ADD_TRIP = 'ADD_TRIP';

export function addTrip(name: string) {
  return {
    type: ADD_TRIP,
    name
  };
}
