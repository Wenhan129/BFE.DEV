/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  // your code here
  const v1List = v1.match(/[^\.]+/g);
  const v2List = v2.match(/[^\.]+/g);

  for (let i = 0; i < v1List.length; i++) {
    if (+v1List[i] > +v2List[i]) {
      return 1;
    } else if (+v1List[i] < +v2List[i]) {
      return -1;
    }
  }
  return 0;
}
