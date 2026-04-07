// Write a function that searches an element in an array and return the index where it found ,
//  if the element is not present then just return -1.

function searchElement(arr, target) {
  length = arr.length;
  for (let i = 0; i < length; i++) {
    if (target == arr[i]) {
      return i;
    }
  }
  return -1;
}
let arr = [4, 2, 0, 10, 8, 30];
let target = 10;
let result = searchElement(arr, target);
console.log(result);
