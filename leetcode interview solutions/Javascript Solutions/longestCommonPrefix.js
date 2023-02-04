/**
 * @param {string[]} strs
 * @return {string}
 */
// beats 97.4% runtime, 91.58% memory
var longestCommonPrefix = function(strs) {
    let outputStr = "";
    let i = 0;
    while (i < strs[0].length) {
        let charMatch = strs.every((str,j) => {
            if ( j != 0) {
                return str[i] === strs[0][i];
            }
            else {
                return true
            }
        });
        if (charMatch) {
            outputStr += strs[0][i];
            i++;
        }
        else {
            return outputStr
        }
    }
    return outputStr
    
};