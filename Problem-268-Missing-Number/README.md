268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2

Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8

Explanation:
n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Approach:
We use the mathematical formula for the sum of first n natural numbers.
Expected total sum from 0 to n:

n(n+1)/2
​
Then:
Find the expected total sum
Find the actual sum of array elements
Subtract both sums

The remaining value is the missing number.

Input:nums = [9,6,4,2,3,5,7,0,1]

Length of array:
n = 9

Step 1: Calculate Total Expected Sum

Using formula:
n(n+1)/2
​
totalSum = 9 \* (9 + 1) / 2
totalSum = 45

Step 2: Find Array Sum
Initial: arraySum = 0

Iteration 1
i = 0
nums[i] = 9
arraySum = 0 + 9 = 9

Iteration 2
i = 1
nums[i] = 6
arraySum = 9 + 6 = 15

Iteration 3
i = 2
nums[i] = 4
arraySum = 15 + 4 = 19

Iteration 4
i = 3
nums[i] = 2
arraySum = 19 + 2 = 21

Iteration 5
i = 4
nums[i] = 3
arraySum = 21 + 3 = 24

Iteration 6
i = 5
nums[i] = 5
arraySum = 24 + 5 = 29

Iteration 7
i = 6
nums[i] = 7
arraySum = 29 + 7 = 36

Iteration 8
i = 7
nums[i] = 0
arraySum = 36 + 0 = 36

Iteration 9
i = 8
nums[i] = 1
arraySum = 36 + 1 = 37

Step 3: Find Missing Number
missingNumber = totalSum - arraySum
missingNumber = 45 - 37
missingNumber = 8

Final Output: 8

Time Complexity: O(n)
We traverse the array once.

Space Complexity: O(1)
No extra space is used.
