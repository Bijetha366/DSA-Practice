// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
function reverseString(s) {
  let length = s.length;
  let halfLength = Math.floor(length / 2);
  let temp = 0;
  for (let i = 0; i < halfLength; i++) {
    temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }
  return s;
}
let s = ["h", "e", "l", "l", "o"];
let result = reverseString(s);
console.log(result);
