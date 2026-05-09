136. Single Number
     Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
     You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Approach-1: Hash Map
Store frequency of each element.

If frequency becomes: 1
then it is the single number.

nums = [4,1,2,1,2]

i = 0
nums[i] = 4
4 not present in hash.
hash = {
4:1
}

i = 1
nums[i] = 1
hash = {
4:1,
1:1
}

i = 2
nums[i] = 2
hash = {
4:1,
1:1,
2:1
}

i = 3
nums[i] = 1
Already exists.
hash = {
4:1,
1:2,
2:1
}

i = 4
nums[i] = 2
hash = {
4:1,
1:2,
2:2
}

Second Loop
Check frequency:
4 → 1

So return: 4

Time Complexity: O(n)
Space Complexity: O(n)

Approach-2: XOR
This is the optimal solution.

XOR Rules
Rule-1
a ^ a = 0
Same numbers cancel each other.

Example:
1 ^ 1 = 0
2 ^ 2 = 0

Rule-2
a ^ 0 = a
Any number XOR with 0 remains same.

Example:
4 ^ 0 = 4

Main Idea
Duplicates cancel each other,
only unique number remains.

Initial
xor = 0

Simplified Mathematical Explanation
4 ^ 1 ^ 2 ^ 1 ^ 2

Rearrange:
4 ^ (1 ^ 1) ^ (2 ^ 2)

Using:
a ^ a = 0

Simplified Mathematical Explanation
4 ^ 1 ^ 2 ^ 1 ^ 2
Rearrange:
4 ^ (1 ^ 1) ^ (2 ^ 2)
Using:
a ^ a = 0

Becomes:

4 ^ 0 ^ 0
4^0
4

Time Complexity: O(n)
Space Complexity: O(1)
