//TO find the Maximum Value and the Minimum Value in Binary Tree:

// { Driver Code Starts
//Initial Template for javascript

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//User function Template for javascript

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
  findMax(root) {
    //code here
    var solve = (root) => {
      if (root === null) {
        return Number.MIN_VALUE;
      }

      return Math.max(root.data, solve(root.left), solve(root.right));
    };

    return solve(root);
  }
  findMin(root) {
    //code here
    var solve = (root) => {
      if (root === null) {
        return Number.POSITIVE_INFINITY;
      }

      return Math.min(root.data, solve(root.left), solve(root.right));
    };

    return solve(root);
  }
}
