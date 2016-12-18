import { Schema } from 'normalizr';
import { defaultId } from './tools';

const carrier = new Schema(
  'carriers',
  {
    idAttribute: defaultId
  }
);

export default carrier;
