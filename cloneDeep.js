function cloneDeep(data, cloned = new Map()) {
  if (data === null || typeof data !== 'object') {
    return data;
  }

  if (cloned.has(data)) {
    return cloned.get(data);
  }

  const output = Array.isArray(data) ? [] : {};
  cloned.set(data, output);
  const keys = Reflect.ownKeys(data);

  for (let key of keys) {
    output[key] = cloneDeep(data[key], cloned);
  }
  return output;
}
