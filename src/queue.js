const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue extends ListNode{

  constructor(startValue) {
    super(startValue);
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    if (this.value === undefined) {
      this.value = value;
      return;
    }
    let copyQueue = this;
    while (copyQueue.next) {
      copyQueue = copyQueue.next;
    }
    copyQueue.next = new ListNode(value);
  }

  dequeue() {
    const top = this.value;
    const copyQueue = this.next;
    this.value = copyQueue.value;
    this.next = copyQueue.next;
    return top;
  }
}

module.exports = {
  Queue
};
