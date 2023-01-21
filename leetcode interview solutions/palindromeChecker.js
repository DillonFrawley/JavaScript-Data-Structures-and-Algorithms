/**
 * @param {string} s
 * @return {boolean}
 */
// Runtime 70ms, Beats 92.41%, Memory 43.8 MB, Beats 94.11%
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;
    console.log(s);

    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};