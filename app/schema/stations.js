import { Schema } from 'normalizr';
import uuidV4 from 'uuid/v4';
import citySchema from './cities';

const station = new Schema(
  'stations',
  {
    idAttribute: (entity) => (entity.id ? entity.id : uuidV4())
  }
);

station.define({
  city: citySchema
});

export default station;
