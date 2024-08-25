// ## Question 2: Check if a Number is a Perfect Square
// *Description:*
// Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect square is a number that is the square of an integer.
// *Example:*
// typescript
// Input: 16
// Output: true  // (4 * 4 = 16)
// Input: 20
// Output: false
// *Hint:* Use the square root function Math.sqrt() and check if the result is an integer.
function isPerfectSquare(num) {
    var sqrt = Math.sqrt(num);
    // Check if the square root is an integer
    if (sqrt === Math.floor(sqrt)) {
        return true; // It's a perfect square
    }
    else {
        return false; // It's not a perfect square
    }
}
// Example usage:
console.log(isPerfectSquare(16)); // Output: true  (4 * 4 = 16)
console.log(isPerfectSquare(20)); // Output: false
