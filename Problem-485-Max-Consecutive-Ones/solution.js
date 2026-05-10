function findMaximumConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
}
let arr = [1, 1, 0, 1, 1, 1];
let result = findMaximumConsecutiveOnes(arr);
console.log(result);
