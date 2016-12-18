import { Schema, arrayOf } from 'normalizr';
import { defaultId } from './tools';
import segmentSchema from './transport';

const trip = new Schema(
  'trips',
  {
    idAttribute: defaultId
  }
);

trip.define({
  transport: arrayOf(segmentSchema)
});

export default trip;
