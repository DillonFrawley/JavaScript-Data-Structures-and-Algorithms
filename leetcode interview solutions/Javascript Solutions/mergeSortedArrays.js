/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Runtime 61ms, Beats 87.74%, Memory 42 MB, Beats 69.89%
var merge = function (nums1, m, nums2, n) {
  while (n--) {
    nums1[m + n] = nums2[n];
  }
  nums1.sort((a, b) => a - b);
};
