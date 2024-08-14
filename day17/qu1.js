// Odd Numbers*
// Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.
// *Example:*
// typescript
// console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
// console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
// *Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd numbers are present.
function productOfOdds(numbers) {
    var product = 1;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            product *= numbers[i];
        }
    }
    return product;
}
console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
