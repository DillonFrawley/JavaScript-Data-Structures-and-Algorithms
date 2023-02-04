function binarySearch(searchList, value, left=0, right=searchList.length-1, path=[]) {
    /*
    Write a function binarySearch that implements the binary search algorithm on an 
    array, returning the path you took (each middle value comparison) to find the 
    target in an array.
  
    The function takes a sorted array of integers and a target value as input. It 
    returns an array containing (in-order) the middle value you found at each 
    halving of the original array until you found the target value. The target value 
    should be the last element of the returned array. If value not is found, return 
    the string Value Not Found.
    */
    let mid = Math.floor((left+right)/2);
    path.push(searchList[mid]);
    if(searchList[mid] == value){
      return path;
    }
    if(left>=right){
      return "Value Not Found";
    }
    if(searchList[mid] > value){
      return binarySearch(searchList, value, left, mid-1, path);
    }
    return binarySearch(searchList, value, mid+1, right, path);
  }