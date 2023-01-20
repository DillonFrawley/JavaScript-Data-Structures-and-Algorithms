/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = (s.length === 0) ? 0: 1;
    for (let i = 0; i < s.length - 1; i++) {
        let substringObject = {};
        substringObject[s[i]] =  true;
        let substringLength = 1;
        for (let j = i + 1; j < s.length && !Boolean(substringObject[s[j]]); j++) {
            substringObject[s[j]] = true;
            substringLength++;
        };
        if (longest < substringLength) {
            longest = substringLength;
        }
    }
    return longest;
};