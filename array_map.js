Array.prototype.myMap = function (cb, thisArg) {
  // your code here
  cb = cb.bind(thisArg);
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const temp = cb(this[i], i, this);
      result[i] = temp;
    }
  }
  return result;
};
