/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  // your code here
  let timer;
  return function (...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.call(this, ...args);
    }, wait);
  };
}
