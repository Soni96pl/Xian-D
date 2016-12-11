import Immutable from 'seamless-immutable';
import { REHYDRATE } from 'redux-persist/constants';
import { ADD_TRIP, ADD_TRIP_TRANSPORT } from '../actions/trips';

const defaultState = Immutable({
  trips: {},
  transport: {}
});

export default function trips(state = defaultState, action) {
  switch (action.type) {
    case REHYDRATE: {
      const incoming = action.payload.trips;
      if (incoming) return state.merge(incoming, { deep: true });
      return state;
    }
    case ADD_TRIP: {
      const { entities } = action.payload;
      return state.merge(entities, { deep: true });
    }
    case ADD_TRIP_TRANSPORT: {
      const { transport } = action.payload.entities;
      return state.update(
        'transport', transportObject => transportObject.merge(transport, { deep: true })
      ).updateIn(
        ['trips', action.payload.result, 'transport'],
        transportList => Immutable(transportList.asMutable().concat(
          Object.keys(transport).map(key => parseInt(key, 10))
        ))
      );
    }
    default:
      return state;
  }
}
