// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(newElement) {
    this.insertAt(0, newElement)

    // Original implementation
    // this.head = new Node(newElement, this.head)
  }

  insertLast(newElement) {
    this.insertAt(this.size(), newElement)

    // Original implementation
    // if (!this.getLast()) {
    //   this.insertFirst(newElement)
    //   return
    // }

    // this.getLast().next = new Node(newElement)
  }

  getFirst() {
    return this.head // or this.getAt(0)
  }

  getLast() {
    return this.getAt(this.size() - 1)

    // Original implementation:
    // let lastNode = this.head

    // while (lastNode?.next) {
    //   lastNode = lastNode.next
    // }

    // return lastNode
  }

  removeFirst() {
    this.removeAt(0)

    // Original implementation:
    // if (!this.head) return

    // this.head = this.head.next
  }

  removeLast() {
    this.removeAt(this.size() - 1)

    // Original implementation:
    // if (!this.head) return

    // if (!this.head.next) {
    //   this.head = null
    //   return
    // }

    // let previousNode = this.head
    // let currentNode = previousNode.next

    // while (currentNode.next) {
    //   previousNode = currentNode
    //   currentNode = previousNode.next
    // }

    // previousNode.next = null
  }

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++

      node = node.next
    }

    return counter
  }

  clear() {
    this.head = null
  }

  getAt(index) {
    if (index >= this.size()) return null

    let node = this.head
    let counter = 0

    while (node && counter < index) {
      counter++

      node = node.next
    }

    return node
  }

  removeAt(index) {
    if (!this.head) return

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let previousNode = this.getAt(index - 1)
    let targetNode = this.getAt(index)

    if (!previousNode || !targetNode) return

    previousNode.next = targetNode.next
  }

  insertAt(index, newElement) {
    if (this.size() === 0 || index === 0) {
      this.head = new Node(newElement, this.head)
      return
    }

    let previousNode = this.getAt(index - 1) || this.getLast()

    previousNode.next = new Node(newElement, previousNode.next)
  }

  forEach(fn) {
    let node = this.head

    while (node) {
      fn(node)

      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head

    while (node) {
      yield node

      node = node.next
    }
  }
}

module.exports = { Node, LinkedList }
