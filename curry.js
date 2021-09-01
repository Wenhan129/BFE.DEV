const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

curriedJoin(1, 2, 3); // '1_2_3'

curriedJoin(1)(2, 3); // '1_2_3'

curriedJoin(1, 2)(3); // '1_2_3'

function curry(func) {
  return function curried(...args) {
    // 1. args are enough for func, call func.
    // 2. args are less for func, bind and return it as a new func.
    if (args.length >= func.length) {
      func.apply(this, args);
    } else {
      curried.bind(this, ...args);
    }
  };
}
