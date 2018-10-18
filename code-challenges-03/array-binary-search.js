
module.exports = exports = {};

exports.binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor(arr.length / 2);

  while(start <= end){
    mid = Math.floor((start + end) / 2);
    if(arr[mid] < key){
      start = mid+1;
    } else if(arr[mid] > key){
      end = mid-1;
    }else{
      return mid;
    }
  }
  return -1
  }
};

