// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8 missing number from the above array was 8.

function missingNumber(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let arraySum = 0;
  for (let i = 0; i < n; i++) {
    arraySum = arraySum + nums[i];
  }
  return totalSum - arraySum;
}
let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
let result = missingNumber(nums);
console.log(result);
