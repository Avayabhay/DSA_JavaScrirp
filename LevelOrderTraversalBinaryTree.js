/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  //Function to return the level order traversal of a tree.
  levelOrder(node) {
    //your code here
    if (node === null) {
      return null;
    }

    var traversal = [];
    var queue = [];
    queue.push(node);
    var traverse = (node) => {
      while (queue.length !== 0) {
        var curr = queue.shift();
        traversal.push(curr.data);

        if (curr.left !== null) {
          queue.push(curr.left);
        }

        if (curr.right !== null) {
          queue.push(curr.right);
        }
      }
      return traversal;
    };
    return traverse(node);
  }
}
