// Question 5:
// Remove Duplicates from Array
// Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed.
// *Do not use built-in methods* like Set.
// Requirements:
// - The function should iterate through the array and check for duplicates manually.
// - You can use additional arrays or variables to keep track of seen elements.
// - Do not use any built-in methods like filter, reduce, or Set.
// Example:
// typescript
function removeDuplicates(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        var condition = false;
        for (var j = 0; j < newArray.length; j++) {
            if (newArray[j] === arr[i]) {
                condition = true;
            }
        }
        if (!condition) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 10, 20, 30, 30])); // Output: [10, 20, 30]
// Question 6:
//  Find the Second Largest Number in an Array
// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.
// Requirements:
// - The function should manually find the largest and second largest numbers by iterating through the array.
// - You can use additional variables to keep track of the largest and second largest numbers.
// - Do not use any built-in methods like sort.
// Example:
// typescript
function findSecondLargest(arr) {
    var largestnumber = arr[0];
    var Secondlargestnumber = arr[1];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largestnumber) {
            largestnumber = arr[i];
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] > Secondlargestnumber && arr[j] < largestnumber) {
                    Secondlargestnumber = arr[j];
                }
            }
        }
    }
    return Secondlargestnumber;
}
// Example usage:
console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25
