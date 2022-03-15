const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let copyList = l;
  let resList;
  while (copyList) {
    if (copyList.value !== k) {
      if (resList) {
        let copyResList = resList;
        while (copyResList.next) copyResList = copyResList.next;
        copyResList.next = new ListNode(copyList.value);
      } else {
        resList = new ListNode(copyList.value);
      }
    }
    copyList = copyList.next;
  }
  return resList;
}

module.exports = {
  removeKFromList
};
