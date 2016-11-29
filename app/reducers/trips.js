// @flow
import { ADD_TRIP } from '../actions/trips';

let tripId = 0;

export function trip(state: Object = {}, action: Object) {
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

export default function trips(state: Array<Object> = [], action: Object) {
  switch (action.type) {
    case ADD_TRIP:
      return [
        ...state,
        trip(undefined, action)
      ];
    default:
      return state;
  }
}
