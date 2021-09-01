/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  const instance = {
    css: (prop, value) => {
      el.style[prop] = value;
      return instance;
    },
  };
  return instance;
}
