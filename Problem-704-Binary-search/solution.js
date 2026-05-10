// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (target == nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
let result = binarySearch(nums, target);
console.log(result);
