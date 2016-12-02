import { PropTypes } from 'react';


export const tripShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}).isRequired;

export const tripsShape = PropTypes.arrayOf(tripShape);
