import { PropTypes } from 'react';
import carrierShape from './carrier';
import stationShape from './station';

export const segmentShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  carrier: carrierShape,
  code: PropTypes.string,
  mode: PropTypes.string,
  departure: PropTypes.shape({
    station: stationShape,
    time: PropTypes.instanceOf(Date)
  }),
  arrival: PropTypes.shape({
    station: stationShape,
    time: PropTypes.instanceOf(Date),
  }),
  price: PropTypes.shape({
    value: PropTypes.number,
    currency: PropTypes.string
  }),
  booking: PropTypes.shape({
    ref: PropTypes.string,
    url: PropTypes.string
  }),
  conditions: PropTypes.string
}).isRequired;

export const transportShape = PropTypes.objectOf(segmentShape);
