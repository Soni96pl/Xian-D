// @flow
export const ADD_TRIP = 'ADD_TRIP';

export function add(name: String) {
  return {
    type: ADD_TRIP,
    name
  };
}
