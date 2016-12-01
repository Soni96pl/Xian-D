// @flow
import { ADD_TRIP } from '../actions/trips';

export function trip(state: Object = {}, action: Object) {
  switch (action.type) {
    case ADD_TRIP:
      return {
        id: action.id,
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
