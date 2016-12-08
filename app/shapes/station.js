import { PropTypes } from 'react';
import cityShape from './city';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  code: PropTypes.string,
  type: PropTypes.string.isRequired,
  city: cityShape.isRequired,
  location: PropTypes.shape({
    address: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    instructions: PropTypes.string
  }).isRequired,
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string
  }).isRequired
});
