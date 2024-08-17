// ### Question 2: Reverse a Number
// *Problem:*
// Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.

// *Hint:*
// - Convert the number to a string, reverse the string, and then convert it back to a number.

// typescript

function reverseNumber(num: number) {
  let arr: string[] = [];
  let str = num.toString();
  let n = str.length;
  while (n > 0) {
    arr.push(str[n - 1]);
    n--;
  }
  return Number(arr.join(""));
}
console.log(reverseNumber(345));
//or
function reverseNumber1(num: number): number {
  let str = num.toString();
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return parseInt(reversedStr, 10);
}

console.log(reverseNumber1(345)); // Output: 543
console.log(reverseNumber1(1234)); // Output: 4321
