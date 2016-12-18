import uuidV4 from 'uuid/v4';

export function defaultId(entity) {
  if ('id' in entity) {
    return entity.id;
  }
  return Object.assign(entity, { id: uuidV4() }).id;
}
