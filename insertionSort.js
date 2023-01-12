function insertionSort(array) {
    /*
    The next sorting method we'll look at is insertion sort. This method works by    
    building up a sorted array at the beginning of the list. It begins the sorted 
    array with the first element. Then it inspects the next element and swaps it 
    backwards into the sorted array until it is in sorted position. It continues 
    iterating through the list and swapping new items backwards into the sorted 
    portion until it reaches the end. This algorithm has quadratic time complexity 
    in the average and worst cases.
    */
    for (let i = 1; i < array.length; i++) {
      let curr = array[i];
      for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = curr;
    }
    return array;
  }
  