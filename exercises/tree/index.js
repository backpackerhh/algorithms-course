// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(childData) {
    const child = new Node(childData)

    this.children.push(child)
  }

  remove(childData) {
    this.children = this.children.filter((child) => child.data !== childData)
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  // Breadth-First Traversal
  traverseBF(fn) {
    fn(this.root)

    function traverseChildren(node) {
      for (let child of node.children) {
        fn(child)
      }

      for (let child of node.children) {
        traverseChildren(child)
      }
    }

    traverseChildren(this.root)
  }

  // Depth-First Traversal
  traverseDF(fn) {
    function traverseChildren(node) {
      fn(node)

      for (let child of node.children) {
        traverseChildren(child)
      }
    }

    traverseChildren(this.root)
  }
}

module.exports = { Tree, Node }
