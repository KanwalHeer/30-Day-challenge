// ### Question: 1 *Sum of Odd Numbers and Multiplication Table*
// Write a function that takes an array of numbers as input. The function should first find the sum of all the odd numbers in the array. Then, it should generate and return an array containing the multiplication table of that sum from 1 to 10.
// *Function Signature:*
// typescript
// function oddSumMultiplicationTable(numbers: number[]): number[] {
//   // Your code here
// }
// *Example:*
// - Input: [2, 3, 5, 8, 11]
// - Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]
//   - (Explanation: The odd numbers are 3, 5, and 11. Their sum is 19. The multiplication table of 19 is generated.)
// *Hint:*
// 1. Use a loop to iterate through the array and sum the odd numbers.
// 2. Use another loop to create the multiplication table for the sum.
function oddSumMultiplicationTable(numbers) {
    var sum = 0;
    var array = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    for (var i = 1; i <= 10; i++) {
        array.push(sum * i);
    }
    return array;
}
console.log(oddSumMultiplicationTable([2, 3, 5, 8, 11]));
