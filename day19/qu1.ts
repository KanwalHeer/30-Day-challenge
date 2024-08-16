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

function MaximumDifference(array: number[]): number {
  if (array.length < 2) {
    // If there are fewer than 2 elements, no valid difference can be computed
    return 0;
  }

  // Initialize variables
  let minValue = array[0]; // Minimum value encountered so far
  let maxDifference = -Infinity; // Maximum difference found

  // Start from the second element
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i]; // The current element in the array
    const difference = currentValue - minValue; // Calculate the difference

    // Update the maximum difference if the current difference is larger
    if (difference > maxDifference) {
      maxDifference = difference;
    }

    // Update the minimum value if the current element is smaller
    if (currentValue < minValue) {
      minValue = currentValue;
    }
  }

  return maxDifference;
}
