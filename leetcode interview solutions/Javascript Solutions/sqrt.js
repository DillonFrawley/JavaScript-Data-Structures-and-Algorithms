/**
 * @param {number} x
 * @return {number}
 */

// runtime 67 ms, beats 96.5%, memory 43 MB, beats 66.55%
var mySqrt = (x) => {
    let l = 0,
      r = x,
      a = 1;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      const n = m*m
      if (n === x) {
        return m;
      } else if (n < x) {
        l = m + 1;
        a = m;
      } else {
        r = m - 1;
      }
    }
    return a;
  };