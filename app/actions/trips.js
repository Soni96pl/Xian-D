// @flow
import Barn from 'barn';

export const ADD_TRIP = 'ADD_TRIP';

const barn = new Barn(localStorage);
if (barn.get('tripId') == null) barn.set('tripId', 0);

export function addTrip(name: string) {
  const tripId = barn.get('tripId') + 1;
  barn.set('tripId', tripId);
  return {
    type: ADD_TRIP,
    id: tripId,
    name
  };
}
