import { Schema } from 'normalizr';
import { defaultId } from './tools';
import carrierSchema from './carriers';
import stationSchema from './stations';

const segment = new Schema(
  'transport',
  {
    idAttribute: defaultId,
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
