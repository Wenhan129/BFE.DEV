/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  return function (...args) {
    let isInvoked = false;

    if (option.leading && timer === null) {
      func.call(this, ...args);
      isInvoked = true;
    }

    window.clearTimeout(timer);

    timer = window.setTimeout(() => {
      if (option.trailing && !isInvoked) {
        func.call(this, ...args);
      }
      timer = null;
    }, wait);
  };
}
