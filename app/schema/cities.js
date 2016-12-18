import { Schema } from 'normalizr';
import { defaultId } from './tools';

const city = new Schema(
  'cities',
  {
    idAttribute: defaultId
  }
);

export default city;
