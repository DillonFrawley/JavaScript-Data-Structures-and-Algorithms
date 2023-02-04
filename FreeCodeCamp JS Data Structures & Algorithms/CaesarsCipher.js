function rot13(str) {
    /*
    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
    A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
    Write a function which takes a ROT13 encoded string as input and returns a decoded string.
    */
    return str.split("").map( value => (/[a-z]/i.test(value) === true) ? ((value.charCodeAt(0) + 13 > 90) ? String.fromCharCode(64 + value.charCodeAt(0) + 13 - 90): String.fromCharCode(value.charCodeAt(0) + 13)) : value
    ).join("");
  }