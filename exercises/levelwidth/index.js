// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const endOfLevel = "eol"
  const width = [0]
  const queue = [root, endOfLevel]

  while (queue.length > 1) {
    const node = queue.shift()

    if (node === endOfLevel) {
      queue.push(endOfLevel)
      width.push(0)
    } else {
      queue.push(...node.children)
      width[width.length - 1]++
    }
  }

  return width
}

module.exports = levelWidth
