import { Schema } from 'normalizr';
import uuidV4 from 'uuid/v4';
import carrierSchema from './carriers';
import stationSchema from './stations';

const segment = new Schema(
  'transport',
  {
    idAttribute: (entity) => (entity.id ? entity.id : uuidV4()),
    defaults: {
      carrier: null,
      code: null,
      departure: null,
      arrival: null,
      price: null,
      booking: null,
      conditions: null
    }
  }
);

segment.define({
  carrier: carrierSchema,
  departure: {
    station: stationSchema
  },
  arrival: {
    station: stationSchema
  }
});

export default segment;
