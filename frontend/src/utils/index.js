export const isMobile = (() => {
  if (
    typeof navigator === 'undefined' ||
    typeof navigator.userAgent !== 'string'
  ) {
    return false;
  }
  return /Mobile/.test(navigator.userAgent);
})();

export const decodeOpaqueId = (opaqueId) => {
  if (opaqueId === undefined || opaqueId === null) return null;
  const unencoded = Buffer.from(opaqueId, 'base64').toString('utf8');
  const [namespace, id] = unencoded.split(':');
  return { namespace, id };
};

export const encodeOpaqueId = (namespace, id) => {
  if (typeof id !== 'string' && typeof id !== 'number') return id;
  const unencoded = `${namespace}:${id}`;
  return Buffer.from(unencoded).toString('base64');
};
