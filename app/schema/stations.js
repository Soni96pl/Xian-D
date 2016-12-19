import { Schema } from 'normalizr';
import { defaultId } from './tools';
import citySchema from './cities';

const station = new Schema(
  'stations',
  {
    idAttribute: defaultId,
    default: {
      code: null,
      type: null,
      city: null,
      location: {
        address: null,
        coordinates: null,
        instructions: null
      },
      contact: {
        phone: null,
        email: null
      }
    }
  }
);

station.define({
  city: citySchema
});

export default station;
