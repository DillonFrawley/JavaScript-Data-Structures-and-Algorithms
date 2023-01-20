/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const len = s.length;
    if (len === 0) {
        return true;
    }
    if (len % 2 !== 0) {
        return false;
    }
    if (len === 2) {
        return s === "{}" || s === "[]" || s === "()";
    }
    let pairs = {"(": ")", "{":"}", "[":"]"}
    let stack = []
    
    for(let i=0; i<s.length; i++) {
        // if it's an opening bracket, push into stack
        // else, assume it's closing bracket and check if it matches anything
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i])
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }
        
    }
    return stack.length === 0
};