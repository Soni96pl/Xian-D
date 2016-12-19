import { Schema } from 'normalizr';
import { defaultId } from './tools';

const carrier = new Schema(
  'carriers',
  {
    idAttribute: defaultId,
    default: {
      contact: {
        phone: null,
        email: null
      }
    }
  }
);

export default carrier;
