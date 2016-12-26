import { PropTypes } from 'react';
import { segmentShape } from './transport';

export const tripShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  transport: PropTypes.arrayOf(segmentShape).isRequired
});

export const tripsShape = PropTypes.objectOf(tripShape.isRequired);
