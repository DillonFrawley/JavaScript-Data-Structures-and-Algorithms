function bubbleSort(array) {
    /*
      Bubble Sort is a sorting algorithm which sorts or bubbles the largest number  
      as last element at the end of each pass.
      We compare each element to the one ahead of it, if the element before is 
      smaller, we swap their places.
      Bubble Sort’s time complexity is O(n2).
      It’s a stable algorithm.
    */
    let i = 0;
    while (i < array.length) {
      console.log(array)
      let j = 0;
      while (j < array.length - 1) {
          [array[j],array[j + 1]] = (array[j] < array[j+1]) ? [array[j],array[j + 1]]: [array[j + 1],array[j]];
        j++;
      }
      i++;
    };
    return array;
  }
  