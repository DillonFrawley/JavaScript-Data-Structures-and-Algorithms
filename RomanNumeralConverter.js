function convertToRoman(num) {
    // Convert the given number into a roman numeral.

    const arabicNumeralsObject = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M"
    }
    const keys = Object.keys(arabicNumeralsObject)
  
    const recursiveConversion = (convertedNumber, index) => {
  
      if (convertedNumber == 0) {
        return "";
      }
      else {
        while (convertedNumber - parseInt(keys[index]) < 0) { 
          index--;
        }
        convertedNumber -= parseInt(keys[index])
        return arabicNumeralsObject[keys[index]] + recursiveConversion(convertedNumber, index)
      }
    }
    return recursiveConversion(num, keys.length - 1);
  }