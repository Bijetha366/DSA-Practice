704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Approach:
Binary Search works only on a sorted array.
Instead of checking every element one by one, Binary Search:
finds the middle element
compares target with middle element
eliminates half of the array in every iteration
This makes the search very fast.

Algorithm Steps
Initialize:
left = 0
right = nums.length - 1
Find middle index:
middle = Math.floor((left + right) / 2)

Compare:
if target == nums[middle]
→ return middle
if target < nums[middle]
→ search left half
right = middle - 1
else
→ search right half
left = middle + 1
If not found return: -1

Dry Run / Iteration Explanation
Input:
nums = [-1,0,3,5,9,12]
target = 9

Initial:
left = 0
right = 5

Iteration 1
right>=left => true
Find middle:
middle = Math.floor((0 + 5) / 2)= 2
Middle value:
nums[2] = 3
Compare: 9 > 3
So target is on right side.
left = middle + 1 = 3

Now:
left = 3
right = 5

Remaining search area:
[5,9,12]

Iteration 2
right>=left => true
Find middle:
middle = Math.floor((3 + 5) / 2) = 4

Middle value:
nums[4] = 9

Compare:
target == nums[middle]
9 == 9

Return: 4
Output: 4

Space Complexity: O(1)
Because we only use variables:
left
right
middle
No extra array or data structure is used.

Why Time Complexity is O(log n)
Binary Search removes HALF of the array every iteration.
Example with 16 elements:
16 → 8 → 4 → 2 → 1
Every step divides search space by 2.

So iterations become:
log₂(n)

Example:
n = 16 → 4 iterations
n = 32 → 5 iterations
n = 1024 → 10 iterations

Suppose array size is: n

After 1 iteration:
n × 1/2 = n/2

After 2 iterations:
n × 1/2 × 1/2 = n/2²

After 3 iterations:
n/2³

After x iterations:
n/2^x

n = 2^x
x = log₂(n)
Time Complexity: O(log n)
