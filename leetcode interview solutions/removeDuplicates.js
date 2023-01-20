/**
 * @param {number[]} nums
 * @return {number}
 */
// runtime 70ms, beats 95%, memory 44.5 MB, beats 82.11%
var removeDuplicates = function(nums) {
    let start = 0     //O(1)
    for(i=0;i<nums.length;i++){   //O(n)
        if(nums[i] != nums[i+1]){
            nums[start] = nums[i]
            start++
        }
    }
    return start
};