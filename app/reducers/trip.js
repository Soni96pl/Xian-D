// @flow
import { ADD_TRIP } from '../actions/trip';

let tripId = 0;

export default function trip(state: {}, action: Object) {
  switch (action.type) {
    case ADD_TRIP:
      tripId += 1;

      return {
        id: tripId,
        name: action.name
      };
    default:
      return state;
  }
}
