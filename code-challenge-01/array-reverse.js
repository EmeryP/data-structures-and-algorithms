let arr = [1,2,3,4];

function reverseArr(){
  let reversedArr = [];
  for(let i = arr.length-1; i >= 0; i--){
    reversedArr[reversedArr.length] = arr[i];
  }
  return reversedArr;
}

reverseArr(arr);