function selectionSort(array, currentIndex = 0) {
    /*
    Selection Sort is one of the easier sorting algorithm to understand and 
    implement.
    This algorithm splits the array in two parts:
    Sorted
    Unsorted
    The Sorted part is at the beginning of the array and Unsorted part afterwards.
    Each pass, initially we assume the first element to be the smallest then we loop 
    through the whole array and select the smallest element. At the end of the pass 
    we swap smallest element to the sorted array.
    It has O(n2) time complexity.
  */
    if ( currentIndex === array.length) {
      return array
    }
    let slicedArray = array.slice(currentIndex, array.length)
    const findMinIndex = arr => arr.reduce((r, v, i, a) => v >= a[r] ? r : i, -1);
    const nextMinIndex = findMinIndex(slicedArray) + currentIndex;
    [array[currentIndex], array[nextMinIndex]] = [array[nextMinIndex], array[currentIndex]];
    return selectionSort(array, currentIndex + 1);
  };
  
  