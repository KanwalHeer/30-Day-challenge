// ### Question:1 *Sum of Even Numbers from Multiple Arrays*
// *Problem Statement:*
// You are given three arrays of integers. Write a function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] that calculates the sum of all even numbers in each array. The function should return a new array containing the sum of even numbers from each of the three arrays.
// *Example:*
// typescript
// sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]) // [6, 14, 22]
// sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30]) // [12, 0, 60]
// sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12]) // [0, 6, 30]
// *Hint:*
// - Iterate through each array and sum up only the even numbers.
// - Store the sum for each array in a new array.
// - Return the new array containing the sums
function sumEvenNumbers(arr1, arr2, arr3) {
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 === 0) {
            sum1 += arr1[i];
        }
    }
    for (var j = 0; j < arr2.length; j++) {
        if (arr2[j] % 2 === 0) {
            sum2 += arr2[j];
        }
    }
    for (var k = 0; k < arr3.length; k++) {
        if (arr3[k] % 2 === 0) {
            sum3 += arr3[k];
        }
    }
    return [sum1, sum2, sum3];
}
console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])); //[6,14, 22]
console.log(sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30])); // [12, 0, 60]
console.log(sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12])); // [0, 6, 30]
