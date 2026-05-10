231. Power of Two

Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:
Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:
Input: n = 3
Output: false

Examples:
1 → true (2^0)
2 → true (2^1)
4 → true (2^2)
8 → true (2^3)
16 → true (2^4)
3 → false
6 → false

Main Idea

A power of 2 number:
can be divided by 2 continuously
remainder should always be 0
finally it should become exactly 1

Example:
16 → 8 → 4 → 2 → 1

So if:
n == 1 → true
n becomes odd before reaching 1 → false
n < 0
Negative numbers cannot be powers of 2.
n % 2 != 0
Odd numbers cannot be divided exactly by 2.
Example:
3 % 2 = 1
5 % 2 = 1
otherwise keep dividing by 2 recursively

Call-1
isPowerOfTwo(16)
Checks:
16 == 1 → false
16 % 2 != 0 → false

So:
return isPowerOfTwo(16 / 2)
Next call:
isPowerOfTwo(8)

Call-2
isPowerOfTwo(8)

Checks:
8 == 1 → false
8 % 2 != 0 → false

Next:
isPowerOfTwo(4)

Call-3
isPowerOfTwo(4)

Checks:
4 == 1 → false
4 % 2 != 0 → false

Next:
isPowerOfTwo(2)

Call-4
isPowerOfTwo(2)

Checks:
2 == 1 → false
2 % 2 != 0 → false

Next:
isPowerOfTwo(1)

Call-5
isPowerOfTwo(1)

Checks:
1 == 1 → true

Returns: true


Dry Run Diagram
16
↓
8
↓
4
↓
2
↓
1
↓
true
