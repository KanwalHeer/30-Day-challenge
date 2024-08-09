// ### Question 1: Remove Duplicates from Sorted Array
// *Problem:*
// You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.

function removeDuplicateArray(arr: number[]) {

    
  function findLength(a: number[]): number {
    let uniqueIndex = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== a[uniqueIndex]) {
        uniqueIndex++;
        a[uniqueIndex] = a[i];
      }
    }
    return uniqueIndex + 1;
  }



  function findUniqueArray(a: number[], length: number): number[] {
    return a.slice(0, length);
  }

  const length = findLength(arr);
  const uniqueArray = findUniqueArray(arr, length);

  return {
    length: length,
    array: uniqueArray,
  };
}

const input = [1, 1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicateArray(input);

console.log(result.length); // Output: 5
console.log(result.array); // Output: [1, 2, 3, 4, 5]

// Input: [1, 1, 2, 2, 3, 4, 4, 5]
// Output: 5
// Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.
