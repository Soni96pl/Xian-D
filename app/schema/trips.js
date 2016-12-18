import { Schema, arrayOf } from 'normalizr';
import uuidV4 from 'uuid/v4';
import segmentSchema from './transport';

const trip = new Schema(
  'trips',
  {
    idAttribute: (entity) => (entity.id ? entity.id : uuidV4())
  }
);

trip.define({
  transport: arrayOf(segmentSchema)
});

export default trip;
