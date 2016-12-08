import { PropTypes } from 'react';
import { transportShape } from './transport';

export const tripShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  transport: PropTypes.arrayOf(transportShape).isRequired
}).isRequired;

export const tripsShape = PropTypes.arrayOf(tripShape);
