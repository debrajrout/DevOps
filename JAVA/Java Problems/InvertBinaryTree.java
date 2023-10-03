Q)Invert a Binary Tree or convert a Binary Tree into Mirror Tree
Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Ans) Now the approach here would be simple as that of swap .
We would store the left root in temp variable and swap left and right places.

class Solution {
    public TreeNode invertTree(TreeNode root) {
        
        if(root==null){
            return root;
        }
        TreeNode temp =root.left;
        root.left=root.right;
        root.right=temp;
        invertTree(root.left);
        invertTree(root.right);
        return root;
        
    }
}

Here the Time Complexity would be O(N) where N is number of nodes in the tree. This is because the code recursively traverses the entire tree, visiting each node once.

The space complexity of the code is O(logn). This is because the recursive calls to invertTree() create a stack of function calls. The depth of the stack is equal to the height of the tree, which is in turn O(logn).