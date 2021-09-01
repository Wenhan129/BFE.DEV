/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
// Recursive
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i++) {
    const node = findCorrespondingNode(
      rootA.children[i],
      rootB.children[i],
      target
    );
    if (node) return node;
  }
};
// BFS
const findCorrespondingNode = (rootA, rootB, target) => {
  const queueA = [];
  const queueB = [];
  queueA.push(rootA);
  queueB.push(rootB);

  while (queueB.length > 0) {
    const size = queueB.length;
    for (let i = 0; i < size; i++) {
      const nodeA = queueA.shift();
      const nodeB = queueB.shift();
      if (nodeA === target) {
        return nodeB;
      }
      Array.from(nodeB.children).forEach((child) => queueB.push(child));
      Array.from(nodeA.children).forEach((child) => queueA.push(child));
    }
  }
};
// document.createTreeWalker
const findCorrespondingNode = (rootA, rootB, target) => {
  const rootATreeWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ALL);
  const rootBTreeWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ALL);

  let currentNodes = [rootA, rootB];
  while (currentNodes[0] !== target) {
    currentNodes = [rootATreeWalker.nextNode(), rootBTreeWalker.nextNode()];
  }

  return currentNodes[1];
};
