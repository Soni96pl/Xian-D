import { PropTypes } from 'react';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  contact: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string
  })
});
