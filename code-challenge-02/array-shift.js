'use strict';

module.exports = exports = {};


exports.insertShiftArray = (arr, num) => {
  let newArr = [];
  let midArr = Math.ceil(arr.length/2);

  if(arr == false || num == false){
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === midArr) {
      newArr[newArr.length] = num;
    }
    newArr[newArr.length] = arr[i];
  }
  return newArr;
};