/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Runtime 59ms, Beats 91.54%, Memory 41.7 MB, Beats 88.81%
var inorderTraversal = (root) => {
    let result = [], stack = [], current = root;
    while (stack.length > 0 || current) {
        while (current) stack.push(current), current = current.left;
        current = stack.pop();
        if (current.val != undefined) result.push(current.val) 
        current = current.right;
    }
    return result;
};
