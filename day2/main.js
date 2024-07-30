// Question 3:
//  First and Last Element
// Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.
// Requirements:
// If the array has only one element, the function should return an array with that element duplicated.
// Ensure the function handles arrays with a single element correctly.
// function flElements(arr: number[]) {
//   let firstElement = arr[0];
//   let lastElement = arr.length - 1;
//   if (arr.length === 0) {
//     return 0;
//   } else if (arr.length === 1) {
//     return [arr[0], arr[0]];
//   } else {
//     return [firstElement, lastElement];
//   }
// }
// console.log(flElements([2, 4, 6, 7, 8]));
// console.log(flElements([4]));
// console.log(flElements([]));
// Question: 4
// Find the Largest Number
// Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.
// Requirements:
// The function should handle arrays with positive and negative numbers.
// If the array contains only one number, return that number.
// Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).
// Note:
// This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic.
function largeElement(numArr) {
    var largestNum = numArr[0];
    if (numArr.length === 1) {
        return largestNum;
    }
    for (var i = 1; i < numArr.length; i++) {
        if (numArr[i] > largestNum) {
            largestNum = numArr[i];
        }
    }
    return largestNum;
}
console.log(largeElement([1, 2, 5, 6, 3]));
console.log(largeElement([5]));
console.log(largeElement([1, -2, -8, -6, 3]));
