27. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Use two pointers:
i → scans every element
x → position where next valid element (≠ val) should go

Idea:
If nums[i] !== val, copy it to nums[x]
Move x forward
Ignore elements equal to val

Iteration 1
i = 0, x = 0

nums = [0,1,2,2,3,0,4,2]
↑
i,x
nums[i] = 0 ≠ 2 → valid
Replace nums[x] = nums[i] → nums[0] = 0 (same)
x++
After:
nums = [0,1,2,2,3,0,4,2]
↑
x=1

Iteration 2
i = 1, x = 1

nums = [0,1,2,2,3,0,4,2]
↑
i,x
nums[i] = 1 ≠ 2 → valid
nums[1] = 1
x++
After:
nums = [0,1,2,2,3,0,4,2]
↑
x=2

Iteration 3
i = 2, x = 2

nums = [0,1,2,2,3,0,4,2]
↑
i,x
nums[i] = 2 == val → ❌ skip
x stays same
After:
nums = [0,1,2,2,3,0,4,2]
↑
x=2 (no change)

Iteration 4
i = 3, x = 2

nums = [0,1,2,2,3,0,4,2]
↑
i
↑
x
nums[i] = 2 → ❌ skip
After:
x = 2
(no change)

Iteration 5
i = 4, x = 2

nums = [0,1,2,2,3,0,4,2]
↑
i
↑
x
nums[i] = 3 ≠ 2 → ✅
nums[x] = nums[i] → nums[2] = 3
After:
nums = [0,1,3,2,3,0,4,2]
↑
x=3

Iteration 6
i = 5, x = 3

nums = [0,1,3,2,3,0,4,2]
↑
i
↑
x
nums[i] = 0 ≠ 2 → ✅
nums[3] = 0
After:
nums = [0,1,3,0,3,0,4,2]
↑
x=4

Iteration 7
i = 6, x = 4

nums = [0,1,3,0,3,0,4,2]
↑
i
↑
x
nums[i] = 4 ≠ 2 → ✅
nums[4] = 4
After:
nums = [0,1,3,0,4,0,4,2]
↑
x=5

Iteration 8
i = 7, x = 5

nums = [0,1,3,0,4,0,4,2]
↑
i
↑
x
nums[i] = 2 → ❌ skip
After:
x = 5
