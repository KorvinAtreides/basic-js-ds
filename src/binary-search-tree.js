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
      if (!copySubTree) return null;
      if (copySubTree.data == data) return copySubTree;
      copySubTree = copySubTree.data > data ? copySubTree.left : copySubTree.right;
    }
  }

  remove(data) {
    if (!this.find(data)) return null;
    let copyTree = this.tree;
    let parentNode;
    while (true) {
      if (copyTree.data == data) {
        //no child nodes
        if(!copyTree.left && !copyTree.right) {
          if (!parentNode) {
            this.tree = null;
          } else if (parentNode.left && parentNode.left.data == data){
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }
          return null;
        }
        //one child node
        if ((!copyTree.left && copyTree.right)||(copyTree.left && !copyTree.right)){
          if (copyTree.right) {
            copyTree.data = copyTree.right.data;
            copyTree.left = copyTree.right.left;
            copyTree.right = copyTree.right.right;
          } else {
            copyTree.data = copyTree.left.data;
            copyTree.right = copyTree.left.right;
            copyTree.left = copyTree.left.left;
          }
          return null;
        }
        //two child nodes
        let copyMinNode = copyTree.right;
        parentNode = copyMinNode;
        while (copyMinNode.left) {
          parentNode = copyMinNode;
          copyMinNode = copyMinNode.left;
        }
        copyTree.data = copyMinNode.data;
        if (parentNode === copyMinNode) {
          copyTree.right = copyMinNode.right;
        } else {
          parentNode.left = copyMinNode.right;
        }
        return null;
      }
      parentNode = copyTree;
      copyTree = copyTree.data > data ? copyTree.left : copyTree.right;
    }
  }

  min() {
    if (!this.tree) return null;
    let copySubTree = this.tree;
    while (true) {
      if (!copySubTree.left) return copySubTree.data;
      copySubTree = copySubTree.left;
    }
  }

  max() {
    if (!this.tree) return null;
    let copySubTree = this.tree;
    while (true) {
      if (!copySubTree.right) return copySubTree.data;
      copySubTree = copySubTree.right;
    }
  }
}

module.exports = {
  BinarySearchTree
};