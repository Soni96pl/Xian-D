import { Schema } from 'normalizr';
import uuidV4 from 'uuid/v4';

const city = new Schema(
  'cities',
  {
    idAttribute: (entity) => (entity.id ? entity.id : uuidV4())
  }
);

export default city;
