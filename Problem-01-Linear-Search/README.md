Problem Statement

Write a function that searches for an element in an array and returns the index where it is found.
If the element is not present in the array, return -1.

🧠 Concept (Simple Explanation)
This program uses a method called Linear Search.

It checks each element in the array one by one.
If it finds the element, it returns its position (index).
If it reaches the end and doesn’t find the element, it returns -1.

▶️ Example 1
Input:
arr = [4, 2, 0, 10, 8, 30]
num = 10
Output:
3
Explanation:
The number 10 is present in the array.
It is found at index 3 (index starts from 0).
So the function returns 3.

▶️ Example 2
Input:
arr = [4, 2, 0, 10, 8, 30]
num = 5
Output:
-1
Explanation:
The number 5 is not present in the array.
The function checks all elements but doesn’t find it.
So it returns -1.

⚙️ How It Works (Step by Step)
Get the length of the array.
Start a loop from index 0.
Compare each element with the given number.
If match is found → return index.
If loop ends → return -1.
📊 Time Complexity
O(n) → because it checks each element one by one.
