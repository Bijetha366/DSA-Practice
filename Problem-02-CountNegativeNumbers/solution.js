// Write a function that returns the number of negative numbers in an array.
//Input: arr = [2, -6, 4, 8, 1, -9]
// Output: 2
function CountNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr = [2, -6, 4, 8, 1, -9];
let result = CountNegativeNumbers(arr);
console.log(result);
