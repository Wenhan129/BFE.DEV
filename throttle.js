/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  let timer = null;
  let stashed;

  return function (...args) {
    if (timer === null) {
      func.call(this, ...args);
      timer = window.setTimeout(() => {
        if (stashed) {
          func.call(stashed[0], ...stashed[1]);
        }
        timer = null;
      }, wait);
    } else {
      stashed = [this, ...args];
    }
  };
}
