// ### Question 1: Find the Maximum Difference
// *Problem Statement:*
// Given an array of integers, find the maximum difference between any two elements in the array. The difference should be calculated as difference = arr[j] - arr[i] where j > i.
// *Example:*
// typescript
// Input: [2, 7, 9, 5, 1, 3, 5]
// Output: 7
// Explanation: The maximum difference is between 9 and 2, where 9 - 2 = 7.
// *Hint:*  
// Iterate through the array, keeping track of the minimum value encountered so far. Calculate the difference between the current element and the minimum value and update the maximum difference accordingly.
// ---
function MaximumDifference(array) {
    var defference = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                defference = array[i] - array[j];
            }
        }
    }
    return defference;
}
console.log(MaximumDifference([2, 7, 9, 5, 1, 3, 5]));
