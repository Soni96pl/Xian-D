import { ADD_TRIP } from '../actions/trips';

export function trip(state: Object = {}, action: Object) {
  switch (action.type) {
    case ADD_TRIP:
      return {
        id: action.id,
        name: action.name,
        transport: action.transport
      };
    default:
      return state;
  }
}

const defaultState = {
  trips: [],
  tripsById: {},
  transport: [],
  transportById: {}
};

export default function trips(state: Object = defaultState, action: Object) {
  switch (action.type) {
    case ADD_TRIP: {
      const newState = { ...state };
      for (const [key, value] of action.payload.entities.trips) {
        newState.tripsById[key] = trip(undefined, {
          ...value,
          ...{ type: ADD_TRIP }
        });
      }
      newState.trips = newState.trips.concat([action.payload.result]);
      return newState;
    }
    default:
      return state;
  }
}
