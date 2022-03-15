const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (!this.tree) {
      this.tree = new Node(data);
      return;
    }
    let copySubTree = this.tree;
    while (true) {
      if (copySubTree.data > data) {
        if (!copySubTree.left) {
          copySubTree.left = new Node(data);
          return;
        }
        copySubTree = copySubTree.left;
      } else {
        if (!copySubTree.right) {
          copySubTree.right = new Node(data);
          return;
        }
        copySubTree = copySubTree.right;
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let copySubTree = this.tree;
    while (true) {
      if (!copySubTree || copySubTree.previousData == data) return null;
      if (copySubTree.data == data) return copySubTree;
      if (copySubTree.data) {
        copySubTree = copySubTree.data > data ? copySubTree.left : copySubTree.right;
      } else {
        copySubTree = copySubTree.previousData > data ? copySubTree.left : copySubTree.right;
      }
    }
  }

  remove(data) {
    if (!this.find(data)) return null;
    let copySubTree = this.tree;
    if (copySubTree.data == data) {
      copySubTree.data == undefined;
      copySubTree.previousData = data;
      return null;
    }
    while (true) {
      if (copySubTree.left && copySubTree.left.data == data){
        copySubTree.left.data = undefined;
        copySubTree.left.previousData = data;
        return null;
      } else if (copySubTree.right && copySubTree.right.data == data){
        copySubTree.right.data = undefined;
        copySubTree.right.previousData = data;
        return null;
      }
      copySubTree = copySubTree.data > data ? copySubTree.left : copySubTree.right;
    }
  }

  min() {
    if (!this.tree) return null;
    let copySubTree = this.tree;
    while (true) {
      if (!copySubTree.left || (!copySubTree.left.data &&!copySubTree.left.left)) return copySubTree.data;
      copySubTree = copySubTree.left;
    }
  }

  max() {
    if (!this.tree) return null;
    let copySubTree = this.tree;
    while (true) {
      if (!copySubTree.right|| (!copySubTree.right.data &&!copySubTree.right.right)) return copySubTree.data;
      copySubTree = copySubTree.right;
    }
  }
}

module.exports = {
  BinarySearchTree
};