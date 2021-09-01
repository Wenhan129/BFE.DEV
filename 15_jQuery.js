/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  const instance = {
    css: (prop, value) => {
      el.style[prop] = value;
      // why cannot be `return this;` ?
      return instance;
    },
  };
  return instance;
}
