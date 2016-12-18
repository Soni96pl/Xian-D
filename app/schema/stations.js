import { Schema } from 'normalizr';
import { defaultId } from './tools';
import citySchema from './cities';

const station = new Schema(
  'stations',
  {
    idAttribute: defaultId
  }
);

station.define({
  city: citySchema
});

export default station;
