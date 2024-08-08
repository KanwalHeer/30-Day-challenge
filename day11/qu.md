Day-11

Question 1: Merge Two Sorted Arrays
Write a function mergeSortedArrays that takes two sorted arrays of numbers and returns a single sorted array by merging them. You cannot use any built-in sort function.

typescript
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    // Your implementation here
}

// Example Usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); 
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8]


 Hint:
- *Hint 1*: Start with two pointers, one at the beginning of each array.
- *Hint 2*: Compare the elements at both pointers and add the smaller element to the result array.
- *Hint 3*: Move the pointer of the array from which the element was taken.
- *Hint 4*: Repeat until all elements from both arrays are merged.

Question 2: Find the First Non-Repeated Character
Write a function firstNonRepeatedCharacter that takes a string and returns the first character that does not repeat. If all characters repeat, return an empty string.

typescript
function firstNonRepeatedCharacter(s: string): string {
    // Your implementation here
}

// Example Usage:
const s = "swiss";
console.log(firstNonRepeatedCharacter(s)); 
// Expected output: "w"

Hint:
- *Hint 1*: Create an object to count the frequency of each character in the string.
- *Hint 2*: Iterate through the string and update the count for each character.
- *Hint 3*: Iterate through the string again and find the first character with a count of 1 in the object.
- *Hint 4*: If no character with a count of 1 is found, return an empty string.