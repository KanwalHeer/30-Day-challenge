// *Find the Maximum Sum from Two Arrays*
// *Problem Statement:*
// Create a function findMaxSum that accepts two arrays of numbers. The function should determine the maximum number from each array and return the sum of these two maximum numbers.
// *Example:*
// typescript
// findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5]); // Output: 38 (8 from the first array + 30 from the second array)
// findMaxSum([1, 2, 3], [4, 5, 6]); // Output: 9 (3 from the first array + 6 from the second array)
// *Hints:*
// 1. *Step 1: Write a Helper Function to Find the Maximum Value in an Array*
//    - Start by creating a function findMax that takes an array of numbers as its parameter.
//    - Initialize a variable (e.g., let max = array[0];) to store the first element of the array, assuming it to be the maximum.
//    - Use a for loop to iterate over the remaining elements of the array.
//    - During each iteration, compare the current element with max. If the current element is greater, update max.
//    - After the loop, max will hold the largest number in the array. Return this value.
// 2. *Step 2: Apply the Helper Function to Both Arrays*
//    - Use the findMax function to find the maximum value in both input arrays.
//    - Store these maximum values in two separate variables.
// 3. *Step 3: Sum the Maximum Values*
//    - Calculate the sum of the two maximum values obtained from the arrays.
//    - Return the final sum.
// 4. *Step 4: Test with Multiple Scenarios*
//    - Test the function with different arrays to ensure it correctly finds the maximum values and sums them.
// By following these steps, students will have a clear path to solving the problem, allowing them to build their understanding of both array traversal and function utilization in TypeScript.
function findMaxSum(arr1, arr2) {
    var max1 = arr1[0];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] > max1) {
            max1 = arr1[i];
        }
    }
    var max2 = arr2[0];
    for (var j = 0; j < arr2.length; j++) {
        if (arr2[j] > max2) {
            max2 = arr2[j];
        }
    }
    return max1 + max2;
}
console.log(findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5]));
; // Output: 38 (8 from the first array + 30 from the second array)
findMaxSum([1, 2, 3], [4, 5, 6]); // Output: 9 (3 from the first array + 6 from the second array)
