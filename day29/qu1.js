// *Question 1: Calculate the Product of Non-Zero Digits*
// Description:
// Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.
// Example:
// typescript
// Input: 4056
// Output: 120  // 4 * 5 * 6 = 120
// Input: 1002
// Output: 2  // 1 * 2 = 2
function NonZeroDigits(num) {
    var product = 1;
    var str = num.toString(); // Corrected here
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== "0") { // Corrected here
            var numberis = Number(str[i]);
            product *= numberis;
        }
    }
    return product; // Corrected here
}
console.log(NonZeroDigits(4056)); // Output: 120
console.log(NonZeroDigits(1002)); // Output: 2
