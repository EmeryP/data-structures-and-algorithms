
module.exports = exports = {};

exports.binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length-1;
  let mid = Math.ceil(arr.length / 2);

  while(start < end){
    mid = Math.ceil((start + end) / 2);
    if(arr[mid] < key){
      start = mid;
    } else if(arr[mid] > key){
      end = mid;
    }else{
      return mid;
    }
  }
};

