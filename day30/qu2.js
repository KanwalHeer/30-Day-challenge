// *Question 2: Calculate the Sum of the First n Natural Numbers*
// *Problem:*
// Write a TypeScript function that takes a positive integer n and returns the sum of the first n natural numbers. For example, if n = 5, the output should be 15 (because 1 + 2 + 3 + 4 + 5 = 15).
// *Hint:*
// - Use the formula for the sum of the first n natural numbers: \(\text{Sum} = \frac{n \times (n + 1)}{2}\).
// - Alternatively, implement the sum using a loop that adds each number from 1 to n.
// *Function Signature:*
// typescript
// function sumOfNaturalNumbers(n: number): number {
//   // Your code here
// }
function sumOfNaturalNumbers1(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumOfNaturalNumbers1(5)); // Output: 15
console.log(sumOfNaturalNumbers1(10)); // Output: 55
console.log(sumOfNaturalNumbers1(100)); // Output: 5050
function sumOfNaturalNumbers2(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumOfNaturalNumbers2(5)); // Output: 15
console.log(sumOfNaturalNumbers2(10)); // Output: 55
console.log(sumOfNaturalNumbers2(100)); // Output: 5050
