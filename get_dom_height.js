const div = document.createElement('div');
div.innerHTML = `
<div>
  <p>
    <button>Hello</button>
  </p>
</div>
<p>
  <span>World!</span>
</p>`;

/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  let maxHeight = 0;
  if (!tree) return maxHeight;
  [...tree.childNodes].map((subtree) => {
    maxHeight = Math.max(maxHeight, getHeight(subtree));
  });
  return maxHeight + 1;
}

console.log(getHeight(div));
