// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// stack -> FILO
// queue -> FIFO

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  add(element) {
    this.stackOne.push(element);
  }

  remove() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop())
    }

    let removedElement = this.stackTwo.pop()

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop())
    }

    return removedElement
  }

  peek() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop())
    }

    let peekedElement = this.stackTwo.peek()

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop())
    }

    return peekedElement
  }
}

module.exports = Queue;
