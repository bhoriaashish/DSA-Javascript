class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function maxDepth(root) {
    if (!root) {
      return 0; // Base case: an empty tree has a depth of 0
    }
  
    let leftDepth = maxDepth(root.left);
    let  rightDepth = maxDepth(root.right);
  
    return Math.max(leftDepth, rightDepth) + 1;
  }
  let root = new TreeNode(3);
   root.left = new TreeNode(9);
   root.right = new TreeNode(20);
   root.right.left = new TreeNode(15);
   root.right.right = new TreeNode(17);
   
   console.log(maxDepth(root));