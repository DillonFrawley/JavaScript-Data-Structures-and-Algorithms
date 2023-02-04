/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Runtime 60ms, beats 88.83%, Memory 41.5 MB, beats 96.17%
var plusOne = function(digits) {
    const areAllNine = digits.every(n => n === 9);
    if(areAllNine) {
        const allZero = Array(digits.length).fill(0);
        return [1, ...allZero];
    }
    
    let extraVal = 1;
    for(let i=digits.length-1; i >= 0; i--) {
        const sum = digits[i] + extraVal;
        if(sum === 10) {
            digits[i] = 0;
            extraVal = 1;
        } else {
            extraVal = 0;
            digits[i] = sum;
        }
    }
    return digits; 
}