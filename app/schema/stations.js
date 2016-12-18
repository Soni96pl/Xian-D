import { Schema } from 'normalizr';
import citySchema from './cities';

const station = new Schema('stations');

station.define({
  city: citySchema
});

export default station;
