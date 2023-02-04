/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// Runtime 63ms, Beats 95.46%, Memory 44.1 MB, Beats 93.2%
const isSymmetric = (root) => {
    if (!root) return true;
    return isSame(root.left, root.right);
};
const isSame = (leftroot, rightroot) => {
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;
    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
};