485. Max Consecutive Ones
     Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2

Approach:
We need to find the maximum number of continuous 1s in the array.

We use two variables:
currentCount → stores current consecutive 1s count
maxCount → stores maximum consecutive 1s found so far

Logic
If current element is 1
→ increase currentCount
If current element is 0
→ update maxCount
→ reset currentCount = 0

Dry Run / Iteration Explanation
Array: [1, 1, 0, 1, 1, 1]

Initial:
maxCount = 0
currentCount = 0

i = 0
arr[0] = 1
Condition true:
currentCount++
Now:
currentCount = 1
maxCount = 0

i = 1
arr[1] = 1
Again 1:
currentCount++
Now:
currentCount = 2
maxCount = 0

i = 2
arr[2] = 0
Now consecutive sequence breaks.
Update maximum: maxCount = Math.max(2, 0)= 2
Reset:
currentCount = 0
Now:
currentCount = 0
maxCount = 2

i = 3
arr[3] = 1
Increase:
currentCount = 1
Now:
currentCount = 1
maxCount = 2

i = 4
arr[4] = 1
Increase:
currentCount = 2
Now:
currentCount = 2
maxCount = 2

i = 5
arr[5] = 1
Increase:
currentCount = 3
Now:
currentCount = 3
maxCount = 2

Loop Ends:
Now array ended, but we still have consecutive 1s count in currentCount.

So:
return Math.max(currentCount, maxCount)
Math.max(3, 2)
= 3

Final Answer: 3

Time Complexity: O(n)
Because we traverse array only once.

Space Complexity: O(1)
