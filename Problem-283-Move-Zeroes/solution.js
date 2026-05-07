// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
function moveZeroes(nums) {
  let p1 = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      temp = nums[i];
      nums[i] = nums[p1];
      nums[p1] = temp;
      p1++;
    }
  }
  return nums;
}
let nums = [0, 1, 0, 3, 12];
let result = moveZeroes(nums);
console.log(result);
