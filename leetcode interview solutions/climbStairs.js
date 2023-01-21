/**
 * @param {number} n
 * @return {number}
 */
// runtime 57 ms, Beats 93.28%, Memory 41.5 MB, Beats 83.38%
var climbStairs = (n) => {
    if(n === 1) return 1;
    if(n === 2) return 2;
    let prev = 1, next = 2, tmp = 0;
    for(let i=2; i<n;i++) {
        tmp = prev + next;
        prev = next;
        next = tmp;
    }
    return next
};