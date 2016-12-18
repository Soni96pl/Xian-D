import { PropTypes } from 'react';
import cityShape from './city';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string,
  type: PropTypes.string,
  city: cityShape,
  location: PropTypes.shape({
    address: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    instructions: PropTypes.string
  }),
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string
  })
});
