import { Schema } from 'normalizr';
import { defaultId } from './tools';
import carrierSchema from './carriers';
import stationSchema from './stations';

const segment = new Schema(
  'transport',
  {
    idAttribute: defaultId
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
