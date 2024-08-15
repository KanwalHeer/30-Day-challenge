// rite a function that takes an array of numbers as input. The function should filter out all the even numbers from the array, square each of those even numbers, and return a new array containing these squared values.
// *Function Signature:*
// typescript
// function squareEvenNumbers(numbers: number[]): number[] {
//   // Your code here
// }
// *Example:*
// - Input: [1, 2, 3, 4, 5, 6]
// - Output: [4, 16, 36]
//   - (Explanation: The even numbers are 2, 4, and 6. Their squares are 4, 16, and 36.)
// *Hint:*
// 1. Use a loop or array method to filter out the even numbers.
// 2. Square each of the filtered numbers and store the results in a new array.
function squareEvenNumbers(numbers) {
    var array = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            array.push(Math.pow(numbers[i], 2));
        }
    }
    return array;
}
console.log(squareEvenNumbers([1, 2, 3, 4, 5, 6]));
