import { Schema } from 'normalizr';

const segment = new Schema(
  'transport',
  {
    defaults: {
      carrier: null,
      code: null,
      departure: null,
      arrival: null,
      price: null,
      booking: null,
      conditions: null
    }
  }
);

export default segment;
