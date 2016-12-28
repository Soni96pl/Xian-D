import segmentSchema from '../schema/transport';

export const UPDATE_SEGMENT = 'UPDATE_SEGMENT';

export function updateSegment(segment) {
  return {
    type: UPDATE_SEGMENT,
    payload: segment,
    meta: {
      schema: segmentSchema
    }
  };
}
