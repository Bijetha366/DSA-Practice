283. Move Zeroes
     Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Approach: Two Pointer Technique
We use:

i → traverses the array
p1 → keeps track of the position where the next non-zero element should be placed

Whenever we find a non-zero number:

Swap it with nums[p1]
Increment p1

This automatically pushes all zeroes toward the end.

Initial Array:
[0, 1, 0, 3, 12]

Initial values:
p1 = 0

Iteration 1:
i = 0
nums[i] = 0
p1=0

Since value is 0, do nothing.

Array remains:

[0, 1, 0, 3, 12]

Iteration 2:
i = 1
nums[i] = 1
p1=0

Non-zero found → swap nums[i] and nums[p1]

Before swap:

nums[i] = 1
nums[p1] = 0

After swap:

[1, 0, 0, 3, 12]

Increment p1
p1 = 1

Iteration 3:
i = 2
nums[i] = 0
Zero found → no swap.
Array remains:
[1, 0, 0, 3, 12]
p1 = 1

Iteration 4:
i = 3
p1=1
nums[i] = 3
Non-zero found → swap nums[i] and nums[p1]

Before swap:
nums[i] = 3
nums[p1] = 0

After swap:
[1, 3, 0, 0, 12]

Increment p1
p1 = 2

Iteration 5:
i = 4
p1=2
nums[i] = 12
Non-zero found → swap nums[i] and nums[p1]

Before swap:
nums[i] = 12
nums[p1] = 0

After swap:
[1, 3, 12, 0, 0]

Increment p1
p1 = 3

Final Output
[1, 3, 12, 0, 0]

Time Complexity
O(n)
We traverse the array only once.

Space Complexity
O(1)
No extra array is used. Everything is done in-place.
