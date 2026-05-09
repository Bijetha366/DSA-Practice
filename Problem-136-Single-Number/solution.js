// Input: nums = [4,1,2,1,2]
// Output: 4

//Approach-1:
function missingNumber(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
}

let nums = [4, 1, 2, 1, 2];
let result = missingNumber(nums);
comsole.log(result);

// Approach-2:
function missingNUmberFind(numbers) {
  let xor = 0;
  for (i = 0; i < numbers.length; i++) {
    xor = xor ^ numbers[i];
  }
  return xor;
}
let numbers = [4, 1, 2, 1, 2];
let result = missingNUmberFind(numbers);
console.log(result);
