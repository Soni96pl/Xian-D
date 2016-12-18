import { Schema } from 'normalizr';
import uuidV4 from 'uuid/v4';

const carrier = new Schema(
  'carriers',
  {
    idAttribute: (entity) => (entity.id ? entity.id : uuidV4())
  }
);

export default carrier;
