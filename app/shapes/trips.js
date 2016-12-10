import { PropTypes } from 'react';

export const tripShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  transport: PropTypes.arrayOf(PropTypes.number).isRequired
});

export const tripsShape = PropTypes.arrayOf(PropTypes.number);

export const tripsByIdShape = PropTypes.arrayOf(tripShape.isRequired);
