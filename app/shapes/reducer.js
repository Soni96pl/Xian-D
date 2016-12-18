import { PropTypes } from 'react';
import carrierShape from './carrier';
import cityShape from './city';
import stationShape from './station';
import { transportShape } from './transport';
import { tripsShape } from './trips';

export default PropTypes.shape({
  carriers: PropTypes.objectOf(carrierShape),
  cities: PropTypes.objectOf(cityShape),
  stations: PropTypes.objectOf(stationShape),
  transport: transportShape,
  trips: tripsShape
});
