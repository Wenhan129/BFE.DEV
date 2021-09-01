/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */

// Wenhan
function get(source, path, defaultValue = undefined) {
  if (typeof path === 'string') {
    path = path.split('.');
  }
  let first = path.shift();
  console.log(first);
  if (first !== undefined && first.indexOf('[') > -1) {
    let temp = first.split('[');
    first = temp[0];
    path.push(temp[1].slice(0, -1));
  }

  if (path.length === 0) {
    if (source[first] === undefined) {
      return defaultValue;
    }
    return source[first];
  } else {
    return get(source[first], path, defaultValue);
  }
}

// adamnoakes
function get(source, path, defaultValue = undefined) {
  const args = typeof path === 'string' ? path.match(/[^\[\]\.]+/g) : path;
  if (!args || !args.length) return;
  const result = args.reduce((item, keyName) => item && item[keyName], source);
  return result || defaultValue;
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

console.log(get(obj, 'a.b.c')); // [1,2,3]
console.log(get(obj, 'a.b.c.0')); // 1
console.log(get(obj, 'a.b.c[1]')); // 2
console.log(get(obj, ['a', 'b', 'c', '2'])); // 3
console.log(get(obj, 'a.b.c[3]')); // undefined
console.log(get(obj, 'a.c', 'bfe')); // 'bfe'
console.log(get(obj, [])); // undefined
