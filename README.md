# 30-Day-DSA-challenge From Hello Coders Team

# Day:1 Task

*Question 1: Sum of an Array*
*Instructions:*
1. Write a function named sumArray that takes an array of numbers as input.
2. The function should return the sum of all numbers in the array.
3. Ensure your function works correctly by testing it with different inputs.

*Example:*
- Input: [1, 2, 3, 4, 5]
- Output: 15

--

*Question 2: Reverse a String*
*Instructions:*

Write a function named reverseString that takes a string as input.
The function should return the reversed version of the input string.
Ensure your function works correctly by testing it with different inputs.
Example:

Input: "hello"
Output: "olleh"  

----

# Day:2 Task

*Question 3:  First and Last Element*
*Instructions:*
Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.

*Requirements:*

If the array has only one element, the function should return an array with that element duplicated.
Ensure the function handles arrays with a single element correctly.

--

*Question 4 : Find the Largest Number*
*Instructions:*
Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.

*Requirements:*

The function should handle arrays with positive and negative numbers.
If the array contains only one number, return that number.
Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).
Note:
This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic.

----

# Day 3: Task

*Question 5: Remove Duplicates from Array*
 *Instructions:*
Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed. 
*Do not use built-in methods* like Set.

*Requirements:*
- The function should iterate through the array and check for duplicates manually.
- You can use additional arrays or variables to keep track of seen elements.
- Do not use any built-in methods like filter, reduce, or Set.

*Example:*
typescript
function removeDuplicates(arr: number[]): number[] {
    // Your code here
}

// *Example usage:*
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 10, 20, 30, 30]));  // Output: [10, 20, 30]

--

*Question 6:  Find the Second Largest Number in an Array*
 *Instructions:*
Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.

*Requirements:*
- The function should manually find the largest and second largest numbers by iterating through the array.
- You can use additional variables to keep track of the largest and second largest numbers.
- Do not use any built-in methods like sort.

*Example:*
typescript
function findSecondLargest(arr: number[]): number {
    // Your code here
}

 *Example usage:*
console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25

----

# Day 4: Task

*Question 7: Find Duplicate Numbers in an Array*

*Description:*

Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.

*Function Signature:*

typescript
function findDuplicates(numbers: number[]): number[] {
    // Your code here
}


*Example:*

typescript
// Input
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// Output
const duplicates = findDuplicates(numbers); 
console.log(duplicates); // [2, 5]


*Hints:*

1. Create an empty array to store the result.
2. Use a nested loop to compare each element with every other element.
3. If a duplicate is found, add it to the result array if it is not already included.

--

*Question 8: Filter Students with Marks Greater than 80*

*Description:*

Create an array of objects where each object represents a student with properties name, age, and marks. Write a function that filters and prints the data of students who have marks greater than 80.

*Function Signature:*

typescript
interface Student {
    name: string;
    age: number;
    marks: number;
}

function printTopStudents(students: Student[]): void {
    // Your code here
}


*Example:*

typescript
// Input
const students: Student[] = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 }
];

// Output
printTopStudents(students); 
// Should print:
// Sara - Age: 22, Marks: 85
// John - Age: 21, Marks: 90


*Hints:*

1. Loop through the array of student objects.
2. Check if the marks property of each student is greater than 80.
3. If true, print the student's details.

---

# Day 5: Task

*Question 1: Array Comparison and Manipulation (Updated)*

Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:

1. *If the lengths of both arrays are the same and all elements are the same:*
   - Merge both arrays into one array.
   - Multiply all elements of the merged array to produce a single number.
   - Return the product.

2. *If the lengths of both arrays are different:*
   - Merge both arrays into one array.
   - Return the middle element of the merged array.

3. *If the lengths of both arrays are the same but elements are different:*
   - Make the elements of both arrays the same by adding corresponding elements.
   - Merge the arrays.
   - Return the sum of the elements of the resulting merged array.

*Hints:*
- Use loops to compare elements and calculate new values.
- Avoid using built-in array methods.
- Think about how to find the middle element of an array when lengths are different.

*Example:*
typescript
function manipulateArrays(arr1: number[], arr2: number[]): number {
    // Your implementation here
}

// Example Test Cases
// manipulateArrays([1, 2, 3], [1, 2, 3]) should output 36 (product of [1, 2, 3, 1, 2, 3])
// manipulateArrays([1, 2], [3, 4, 5]) should output 3 (middle element of [1, 2, 3, 4, 5])
// manipulateArrays([1, 2], [3, 4]) should output 6 (sum of [1, 2, 1, 2])


---

*Question 2: Extract First Letters from String Array*

Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.

*Hints:*
- Iterate through each name in the array.
- Extract the first letter of each name without using built-in methods.

*Example:*
typescript
function extractFirstLetters(names: string[]): string[] {
    // Your implementation here
}

// Example Test Case
// extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]) should output ["A", "B", "C", "D", "E"]
