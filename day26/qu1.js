// ### Question 1: Reverse a Number
// Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.
// Example:
// typescript
function reverseNumber(n) {
    var reverseArray = [];
    var numStr = n.toString();
    for (var i = numStr.length; i >= 0; i--) {
        reverseArray.push(numStr[i]);
    }
    var str = reverseArray.join('');
    return Number(str);
}
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(567)); // Output: 765
