import Immutable from 'seamless-immutable';
import { REHYDRATE } from 'redux-persist/constants';
import { ADD_TRIP, ADD_TRIP_TRANSPORT } from '../actions/trips';
import { UPDATE_SEGMENT } from '../actions/transport';

const defaultState = Immutable({
  trips: {},
  transport: {},
  carriers: {},
  stations: {}
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
      return Object.keys(action.payload.entities).reduce(
        (stateObject, entity) => (
          entity === 'trips' ?
            stateObject :
            stateObject.update(entity, obj => obj.merge(action.payload.entities[entity]))
        ),
        state
      ).updateIn(
        ['trips', action.payload.result, 'transport'],
        transportList => Immutable(transportList.asMutable().concat(Object.keys(transport)))
      );
    }
    case UPDATE_SEGMENT: {
      return state.merge(action.payload.entities, { deep: true });
    }
    default:
      return state;
  }
}
