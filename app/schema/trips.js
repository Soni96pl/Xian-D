import { Schema, arrayOf } from 'normalizr';
import segmentSchema from './transport';

const trip = new Schema('trips');

trip.define({
  transport: arrayOf(segmentSchema)
});

export default trip;
