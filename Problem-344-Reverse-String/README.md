344.Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Approach:
We use the Two Pointer Technique.

One pointer starts from the beginning (i)
Another pointer is calculated from the end (length - 1 - i)
Swap both characters
Continue until the middle of the array

Since we are swapping inside the same array, the solution uses:

Time Complexity: O(n)
Space Complexity: O(1)

Initial Array
s = ["h","e","l","l","o"]

Indexes:
0 1 2 3 4
["h", "e", "l", "l", "o"]

Length:

length = 5
halfLength = 2

Iteration 1:

Current Values
i = 0
left = i = 0
right = length - 1 - i
= 5 - 1 - 0
= 4
Before Swapping
0 1 2 3 4
["h", "e", "l", "l", "o"]
↑ ↑
left right

Swap:

temp = s[0] = "h"
s[0] = s[4]
s[4] = temp

After Swapping
0 1 2 3 4
["o", "e", "l", "l", "h"]

Iteration 2:
Current Values
i = 1

left = 1
right = 5 - 1 - 1
= 3
Before Swapping
0 1 2 3 4
["o", "e", "l", "l", "h"]
↑ ↑
left right

Swap:
temp = s[1] = "e"
s[1] = s[3]
s[3] = temp

After Swapping
0 1 2 3 4
["o", "l", "l", "e", "h"]

Final Output
["o","l","l","e","h"]
