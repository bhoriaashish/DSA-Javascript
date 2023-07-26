class TreeNode{
    constructor(Val){
        this.Val = Val;
        this.left = null;
        this.rigth = null;
    }
}
// let root1,root2;
function identicalNode(root1,root2){
    if(!root1 && !root2){
        return true;
    }
    if(!root1 || !root2 || root1.Val !== root2.Val){
        return false;
    }
    return(
        identicalNode(root1.left,root2.left) &&
        identicalNode(root1.right,root2.right)
    )
     
}
// Example usage:

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(identicalNode(tree1, tree2)); // Output: true
