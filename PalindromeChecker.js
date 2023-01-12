function palindrome(str) {
    /* 
    Return true if the given string is a palindrome. Otherwise, return false.
    A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
    */
  let newStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return newStr.split("").reverse().join("") === newStr;
}

console.log(palindrome("My age is 0, 0 si ega ym."));