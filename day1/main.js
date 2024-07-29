// ### Question 1: Sum of an Array
// *Instructions:*
// 1. Write a function named sumArray that takes an array of numbers as input.
// 2. The function should return the sum of all numbers in the array.
// 3. Ensure your function works correctly by testing it with different inputs.
// *Example:*
// - Input: [1, 2, 3, 4, 5]
// - Output: 15
var array = [1, 4, 6, 8, 1];
function sumArray(numArray) {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}
console.log("Sum of this array ".concat(array, " is ").concat(sumArray(array)));
// Question 3: Reverse a String
// Instructions:
// Write a function named reverseString that takes a string as input.
// The function should return the reversed version of the input string.
// Ensure your function works correctly by testing it with different inputs.
// Example:
// Input: "hello"
// Output: "olleh"
function reverseString(str) {
    var reverseArray = [];
    var str1;
    for (var i = (str.length - 1); i >= 0; i--) {
        str1 = str[i];
        reverseArray.push(str1);
    }
    return reverseArray.join("");
}
console.log(reverseString("hello"));
