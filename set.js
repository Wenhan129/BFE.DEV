/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */
function set(obj, path, value) {
  const argsPath = typeof path === 'string' ? path.match(/[^\[\]\.]+/g) : path;
  while (argsPath.length > 1) {
    const key = argsPath.shift();
    if (!(key in obj)) {
      const nextKey = argsPath[0];
      obj[key] = (+nextKey).toString() === nextKey ? [] : {};
    }
    obj = obj[key];
  }
  obj[argsPath[0]] = value;
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};
set(obj, 'a.b.c', 'BFE');
console.log(obj.a.b.c); // "BFE"

set(obj, 'a.b.c.0', 'BFE');
console.log(obj.a.b.c[0]); // "BFE"

set(obj, 'a.b.c[1]', 'BFE');
console.log(obj.a.b.c[1]); // "BFE"

set(obj, ['a', 'b', 'c', '2'], 'BFE');
console.log(obj.a.b.c[2]); // "BFE"

set(obj, 'a.b.c[3]', 'BFE');
console.log(obj.a.b.c[3]); // "BFE"

set(obj, 'a.c.d[0]', 'BFE');
// valid digits treated as array elements
console.log(obj.a.c.d[0]); // "BFE"

set(obj, 'a.c.d.01', 'BFE');
// invalid digits treated as property string
console.log(obj.a.c.d['01']); // "BFE"
