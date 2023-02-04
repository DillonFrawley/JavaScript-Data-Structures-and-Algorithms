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
 * @return {number}
 */
// Runtime 54ms, Beats 99.66%, Memory 44.1 MB, Beats 95.61%
const maxDepth = (root) => {
    if (!root) return null;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};