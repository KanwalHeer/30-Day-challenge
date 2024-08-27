// *Question 1: Convert Number to Words*
// *Problem:*
// Write a TypeScript function that takes a number between 0 and 99 and returns the number in words. For example, if the input is 45, the output should be "Forty-Five".
// *Hint:*
// - Create arrays for single digits (0-9), teens (10-19), and tens (20, 30, ... 90).
// - Handle different cases separately: numbers less than 10, between 10 and 19, and between 20 and 99.
// *Function Signature:*
// typescript
// function numberToWords(num: number): string {
//   // Your code here
// }
// ---
function numberToWords(num) {
    var singleDigits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    if (num < 10) {
        return singleDigits[num];
    }
    else if (num >= 10 && num < 20) {
        return teens[num - 10];
    }
    else {
        var tensPart = Math.floor(num / 10);
        var unitsPart = num % 10;
        if (unitsPart === 0) {
            return tens[tensPart];
        }
        else {
            return "".concat(tens[tensPart], "-").concat(singleDigits[unitsPart]);
        }
    }
}
console.log(numberToWords(45)); // Output: Forty-Five
console.log(numberToWords(7)); // Output: Seven
console.log(numberToWords(13)); // Output: Thirteen
console.log(numberToWords(80)); // Output: Eighty
console.log(numberToWords(99)); // Output: Ninety-Nine
