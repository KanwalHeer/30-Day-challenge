// ### Question 1: Count the Number of Divisors
// *Description:*
// Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.
function Divisors(num) {
    var count = 0;
    // Loop through all numbers from 1 to num
    for (var i = 1; i <= num; i++) {
        // Check if i is a divisor of num
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}
// Example usage:
console.log(Divisors(12)); // Output: 6 (1, 2, 3, 4, 6, 12)
console.log(Divisors(7)); // Output: 2 (1, 7)
// *Example:*
// typescript
// Input: 12
// Output: 6  // (1, 2, 3, 4, 6, 12)
// Input: 7
// Output: 2  // (1, 7)
// *Hint:* Use a loop to check each number from 1 to the given number to see if it divides the number evenly.
