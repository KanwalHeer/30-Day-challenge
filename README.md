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

---

# Day 6: Task

*Question 11: Simple Calculator*

*Task:*
Create a simple calculator that can perform addition, subtraction, multiplication, and division.

1. *Functional Programming Approach:* 
   - Write functions for each operation: add, subtract, multiply, and divide.
   - Implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.

2. *Object-Oriented Programming (OOP) Approach:*
   - Create a Calculator class with methods for each operation.
   - Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the operation.

*Question 12: Separate Elements by Type*

*Task:*
Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean).


---

# Day 7: Task

*Question 13: OOP Related*

Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
1. Display the book details.
2. Check if the book is a recent publication (within the last 5 years).
3. Change the genre of the book.
4. Check if the book's author matches a given author name.

*Hints:*
- Use console.log to print book details in the displayDetails method.
- In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
- Update the genre property in the changeGenre method.
- In the isAuthor method, compare the author property with the given author name.

 *Question 14: Nested Object with Interfaces*

Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.

*Hints:*
- Define the Address and Person interfaces with the required properties.
- Use nested loops to iterate through the people array and each person's addresses array.
- Check if the city property matches the given city in the function.
- Return the name and email of the first matching person or undefined if no match is found.


---

# Day 8: Task

*Question 15: Exporting and Importing Multiple Functions*

*Question:*
Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.

*Hint:*
- Use export to export the functions in the first file.
- Use named imports to bring the functions into the second file.
- Ensure that the file paths are correctly specified when importing.

*Question 16: Exporting and Importing Interfaces and Classes*

*Question:*
Create three separate files. In the first file, define and export an interface Shape with properties name and area, and a method calculateArea(). In the second file, define and export a class Circle that implements the Shape interface. The class should have a property radius and implement the calculateArea method. In the third file, import the Circle class, create an instance of Circle, and print the name and area of the circle.

*Hint:*
- Use export to export the interface in the first file.
- Use export to export the class in the second file.
- Use named imports to bring the interface and class into the third file.
- Ensure that the file paths are correctly specified when importing.

---

# Day 9: Task

*Question 17: Implement a Stack using TypeScript*

*Problem Statement:*
Implement a stack using TypeScript. The stack should have the following methods:
1. push(item: T): void - Adds an item to the top of the stack.
2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.

*Constraints:*
- Use generics to make the stack implementation type-safe.
- The stack should handle various data types (number, string, etc.).

*Example Usage:*
typescript
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop());  // Output: 2
console.log(stack.pop());  // Output: 1
console.log(stack.isEmpty()); // Output: true


*Question 18: Implement a Queue using TypeScript*

*Problem Statement:*
Implement a queue using TypeScript. The queue should have the following methods:
1. enqueue(item: T): void - Adds an item to the end of the queue.
2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.

*Constraints:*
- Use generics to make the queue implementation type-safe.
- The queue should handle various data types (number, string, etc.).

*Example Usage:*
typescript
const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.peek()); // Output: "a"
console.log(queue.dequeue());  // Output: "a"
console.log(queue.dequeue());  // Output: "b"
console.log(queue.isEmpty()); // Output: true


# Day 10: Task

*Question 19: Implement a Basic Counter*

**Problem Statement:**
Create a TypeScript class `Counter` that manages a simple counter with the following methods:

1. `increment(): void` - Increments the counter by 1.
2. `decrement(): void` - Decrements the counter by 1.
3. `getValue(): number` - Returns the current value of the counter.

**Example Usage:**

```typescript
const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
counter.decrement();
console.log(counter.getValue()); // Output: 1
```

*Question 20: Implement a Simple Student Record*

**Problem Statement:**
Create a TypeScript class `Student` to manage a student's name and grade. The class should have the following methods:

1. `setName(name: string): void` - Sets the student's name.
2. `setGrade(grade: number): void` - Sets the student's grade.
3. `getRecord(): { name: string; grade: number }` - Returns an object with the student's name and grade.

**Example Usage:**

```typescript
const student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
```
---

# Day 11: Task

*Question 21: Merge Two Sorted Arrays*
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

*Question 22: Find the First Non-Repeated Character*
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

---

# Day 12: Task

*Question 23: Remove Duplicates from Sorted Array*
*Problem:*
You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.

*Example:*
typescript
Input: [1, 1, 2, 2, 3, 4, 4, 5]
Output: 5
Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.


*Note:*
* Only return the length of the unique elements.
* Duplicate elements should be ignored.

*Question 24: Move Zeroes*
*Problem:*
You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.

*Example:*
typescript
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]


*Note:*
* You must modify the array in-place.
* The relative order of the non-zero elements should remain the same.
* 

---
# Day 13: Task

*Question 25: Count Vowels in a String*
*Problem Statement:*
Write a function in TypeScript that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.

*Example:*
typescript
countVowels("hello world"); // Output: 3
countVowels("TypeScript"); // Output: 3


*Function Signature:*
typescript
function countVowels(str: string): number {
    // Your code here
}


*Hints:*

1. *Loop through the string:*
   - Use a loop to iterate over each character in the string.

2. *Check for vowels:*
   - Compare each character with the vowels ('a', 'e', 'i', 'o', 'u'). Make sure to check both lowercase and uppercase vowels.

3. *Counting:*
   - Maintain a counter variable to keep track of the number of vowels found. Increment this counter each time you encounter a vowel.

4. *Return the count:*
   - After completing the loop, return the value of the counter, which represents the total number of vowels in the string.

---

*Question 26: Find the Missing Number in an Array*
*Problem Statement:*
Write a function in TypeScript that takes an array of numbers containing n distinct numbers taken from the range 1 to n+1, where one number is missing. The function should find and return the missing number.

*Example:*
typescript
findMissingNumber([1, 2, 4, 5]); // Output: 3
findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Output: 6


*Function Signature:*
typescript
function findMissingNumber(arr: number[]): number {
    // Your code here
}


*Hints:*

1. *Sum Formula:*
   - Use the formula for the sum of the first n natural numbers: \(\text{Sum} = \frac{n(n+1)}{2}\). This gives you the total sum if no numbers were missing.

2. *Sum the Array:*
   - Calculate the sum of all elements present in the given array.

3. *Subtract to Find Missing Number:*
   - Subtract the sum of the elements in the array from the expected sum (calculated using the formula). The result will be the missing number.

4. *Edge Cases:*
   - Consider edge cases where the missing number might be the smallest (1) or the largest number in the range.

---

# Day 14: Task

*Question:27 *Find the Maximum Sum from Two Arrays**
*Problem Statement:*  
Create a function findMaxSum that accepts two arrays of numbers. The function should determine the maximum number from each array and return the sum of these two maximum numbers.

*Example:*  
typescript
findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5]); // Output: 38 (8 from the first array + 30 from the second array)
findMaxSum([1, 2, 3], [4, 5, 6]); // Output: 9 (3 from the first array + 6 from the second array)


*Hints:*  
1. *Step 1: Write a Helper Function to Find the Maximum Value in an Array*
   - Start by creating a function findMax that takes an array of numbers as its parameter.
   - Initialize a variable (e.g., let max = array[0];) to store the first element of the array, assuming it to be the maximum.
   - Use a for loop to iterate over the remaining elements of the array.
   - During each iteration, compare the current element with max. If the current element is greater, update max.
   - After the loop, max will hold the largest number in the array. Return this value.

2. *Step 2: Apply the Helper Function to Both Arrays*
   - Use the findMax function to find the maximum value in both input arrays.
   - Store these maximum values in two separate variables.

3. *Step 3: Sum the Maximum Values*
   - Calculate the sum of the two maximum values obtained from the arrays.
   - Return the final sum.

4. *Step 4: Test with Multiple Scenarios*
   - Test the function with different arrays to ensure it correctly finds the maximum values and sums them.
  
     
---
*Question 28: *Check if a String is a Palindrome**
*Problem Statement:*  
Write a function isPalindrome that takes a string as input and checks if it reads the same backward as forward. The function should return true if the string is a palindrome and false otherwise.

*Example:*  
typescript
isPalindrome("madam"); // Output: true
isPalindrome("hello"); // Output: false


*Hints:*  
1. *Step 1: Normalize the String*
   - Convert the string to lowercase to handle case sensitivity (str = str.toLowerCase();).
   - If necessary, remove non-alphanumeric characters (e.g., spaces, punctuation) to focus on the actual content.

2. *Step 2: Use Two-Pointer Technique*
   - Initialize two pointers: one at the start of the string (let left = 0;) and one at the end (let right = str.length - 1;).
   - Use a while loop to compare characters at these pointers. Continue looping until the two pointers meet in the middle.
   - If at any point the characters at left and right pointers do not match, return false.

3. *Step 3: Complete the Loop*
   - If the loop completes without finding a mismatch, the string is a palindrome. Return true.

4. *Step 4: Test with Various Strings*
   - Test the function with both palindromes and non-palindromes to verify that it works as expected.
  
---

# Day 15: Task

*Question 29: Anagrams*

*Problem:*
Write a TypeScript function areAnagrams(str1: string, str2: string): boolean that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase using all the original letters exactly once.

*Hints:*

1. *Normalize Case:*
   - Convert both strings to lowercase to ensure that the comparison is case-insensitive.
   - Traverse each character of the strings and convert uppercase characters to lowercase.

2. *Count Characters:*
   - Use a fixed-size data structure like an array to count the occurrences of each character in both strings. Since we're only dealing with lowercase letters, an array of size 26 (for 'a' to 'z') will suffice.
   - Initialize two arrays (or two objects with 26 keys) to keep track of character frequencies for each string.

3. *Compare Character Counts:*
   - After populating the frequency arrays for both strings, compare them to determine if they are identical.
   - If they match, then the two strings are anagrams; otherwise, they are not.

4. *Edge Cases:*
   - Check if the strings have different lengths initially. If they do, they cannot be anagrams.
   - Handle empty strings as valid anagrams of each other.

*Question 30: Reverse Words in a Sentence*

*Problem:*
Write a TypeScript function reverseWords(sentence: string): string that reverses the words in a given sentence. For example, if the input is "Hello world", the output should be "world Hello".

*Hints:*

1. *Identify Word Boundaries:*
   - Traverse the sentence character by character.
   - Detect the start and end of each word by identifying spaces or the start/end of the string.

2. *Extract Words:*
   - Use indices to keep track of where each word starts and ends.
   - Build an array of words from these indices by manually copying characters into new strings.

3. *Reverse the Order of Words:*
   - After extracting the words, create a new array to hold them in reverse order.
   - Iterate through the original array of words from the end to the beginning and insert them into the new array.

4. *Reconstruct the Sentence:*
   - Concatenate the reversed array of words into a single string, ensuring that words are separated by spaces.

5. *Edge Cases:*
   - Handle multiple spaces between words by treating consecutive spaces as single separators.
   - Consider sentences with leading, trailing, or multiple spaces.


---

# Day 16: Task

*Question:31 *Sum of Even Numbers from Multiple Arrays**

*Problem Statement:*
You are given three arrays of integers. Write a function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] that calculates the sum of all even numbers in each array. The function should return a new array containing the sum of even numbers from each of the three arrays.

*Example:*
typescript
sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]) // [6, 14, 22]
sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30]) // [12, 0, 60]
sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12]) // [0, 6, 30]


*Hint:*
- Iterate through each array and sum up only the even numbers.
- Store the sum for each array in a new array.
- Return the new array containing the sums



*Question:32 *Concatenate Strings from Arrays**

*Problem Statement:*
You are given three arrays of strings. Write a function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] that extracts the first letter of each string in the arrays, concatenates these letters for each array, and returns a new array containing the concatenated strings.

*Example:*
typescript
concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"])
// ["abc", "def", "ghk"]

concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"])
// ["sm", "sp", "gc"]

concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"])
// ["tcl", "ccs", "dsc"]


*Hint:*
- Iterate through each string in the arrays, extract the first letter, and concatenate them.
- Store the concatenated result for each array in a new array.
- Return the new array containing the concatenated strings.

---

# Day 17: Task

*Question 33: *Calculate the Product of Odd Numbers**
Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.

*Example:*
typescript
console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
console.log(productOfOdds([2, 4, 6, 8])); // Output: 1


*Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd numbers are present.

---

*Question 34: *Find the Longest Word in a Sentence**
Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.

*Example:*
typescript
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"

---
# Day 18: Task

*Question: 35 :Sum of Odd Numbers and Multiplication Table*
Write a function that takes an array of numbers as input. The function should first find the sum of all the odd numbers in the array. Then, it should generate and return an array containing the multiplication table of that sum from 1 to 10.

*Function Signature:*
typescript
function oddSumMultiplicationTable(numbers: number[]): number[] {
  // Your code here
}


*Example:*
- Input: [2, 3, 5, 8, 11]
- Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]
  - (Explanation: The odd numbers are 3, 5, and 11. Their sum is 19. The multiplication table of 19 is generated.)

*Hint:*
1. Use a loop to iterate through the array and sum the odd numbers.
2. Use another loop to create the multiplication table for the sum.



*Question: 36 :Filter and Square Even Numbers*
Write a function that takes an array of numbers as input. The function should filter out all the even numbers from the array, square each of those even numbers, and return a new array containing these squared values.

*Function Signature:*
typescript
function squareEvenNumbers(numbers: number[]): number[] {
  // Your code here
}


*Example:*
- Input: [1, 2, 3, 4, 5, 6]
- Output: [4, 16, 36]
  - (Explanation: The even numbers are 2, 4, and 6. Their squares are 4, 16, and 36.)

*Hint:*
1. Use a loop or array method to filter out the even numbers.
2. Square each of the filtered numbers and store the results in a new array.
---

# Day 19: Task

*Question 37: Find the Maximum Difference*
*Problem Statement:*
Given an array of integers, find the maximum difference between any two elements in the array. The difference should be calculated as difference = arr[j] - arr[i] where j > i.

*Example:*
typescript
Input: [2, 7, 9, 5, 1, 3, 5]
Output: 7
Explanation: The maximum difference is between 9 and 2, where 9 - 2 = 7.


*Hint:*  
Iterate through the array, keeping track of the minimum value encountered so far. Calculate the difference between the current element and the minimum value and update the maximum difference accordingly.

---

*Question 38: String Character Frequency*
*Problem Statement:*
Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.

*Example:*
typescript
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }


*Hint:*  
Use an object to store the frequency of each character. Iterate over the string and update the count for each character

---

# Day 20: Task

*Question 39: Check for Prime Number*
*Problem:*  
Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.

*Hint:*  
- Use a loop to check divisibility from 2 up to the square root of the number.
- If the number is divisible by any of these, it is not prime.

typescript
function isPrime(num: number): boolean {
    // Your code here
}

---
*Question 40: Reverse a Number*
*Problem:*  
Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.

*Hint:*  
- Convert the number to a string, reverse the string, and then convert it back to a number.

typescript
function reverseNumber(num: number): number {
    // Your code here
}

---

# Day 21: Task

*Question 41: Sum of DigitsZ*
*Problem:*  
Write a function sumOfDigits that takes a number as input and returns the sum of its digits.

*Example:*  
typescript
sumOfDigits(123); // Output: 6 (1 + 2 + 3)
sumOfDigits(4567); // Output: 22 (4 + 5 + 6 + 7)


*Hint:*  
You can convert the number to a string, split it into individual digits, and then sum them up.

---

*Question 42: Count Consonants in a String*
*Problem:*  
Write a function countConsonants that takes a string as input and returns the number of consonants in the string. Consonants are all alphabetical characters except a, e, i, o, u (both lowercase and uppercase).

*Example:*  
typescript
countConsonants("hello"); // Output: 3
countConsonants("TypeScript"); // Output: 7


*Hint:*  
Loop through the string and check each character to see if it is a consonant by excluding vowels.

---

# Day 22: Task

*Question 43: Count Digits in a Number*
Given a number, your task is to count and return the number of digits in that number.

*Example:*
typescript
function countDigits(num: number): number {
    // Write your logic here
}

// Example usage
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(987));   // Output: 3


*Question 44: Calculate the Power of a Number*
Given a base number b and an exponent e, your task is to calculate b raised to the power of e without using built-in methods like Math.pow.

*Example:*
typescript
function calculatePower(b: number, e: number): number {
    // Write your logic here
}

// Example usage
console.log(calculatePower(2, 3)); // Output: 8
console.log(calculatePower(5, 0)); // Output: 1

---

# Day 23: Task

*Question 45: Calculate the Factorial of a Number*
Task: Write a function calculateFactorial that takes a number as input and returns its factorial.

Hint: Factorial means multiplying a number by all positive integers less than it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

*Question 46: Convert a Number to Binary (Without Using Built-in Functions)*
Task: Write a function convertToBinary that takes a number as input and converts it into its binary form.

Hint: Repeatedly divide the number by 2 and note down the remainder. Join the remainders in reverse order to get the binary representation.

---

# Day 24: Task


*Question 47: Generate Fibonacci Sequence*
Write a function generateFibonacci(n: number): number[] that generates and returns the first n numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

*Hint:* Use a loop or recursion to build the sequence.

*Example:*
typescript
generateFibonacci(5); // Output: [0, 1, 1, 2, 3]
generateFibonacci(7); // Output: [0, 1, 1, 2, 3, 5, 8]



*Question 48: Replace Vowels with Asterisks*
Write a function replaceVowels(str: string): string that takes a string str and returns a new string where all vowels (a, e, i, o, u) are replaced with asterisks (*). The function should be case-insensitive.

*Hint:* You can use a loop or a regular expression to find and replace vowels.

*Example:*
typescript
replaceVowels('Hello World'); // Output: 'H*ll* W*rld'
replaceVowels('TypeScript');  // Output: 'Typ*Scr*pt'

---

# Day 25: Task

*Question 49: Calculate the Difference Between the Sum of Odd and Even Digits*
*Problem:* You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference between these two sums. The difference should be positive.

*Example:*
- Input: number = 1234
- Output: 2 (Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)

*Hint:* Convert the number to a string, then check each digit to see if it’s odd or even, and calculate the respective sums.

---

*Question 50: Find the Smallest Divisor of a Number (Greater than 1)*
*Problem:* You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.

*Example:*
- Input: number = 15
- Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)

*Hint:* Use a loop to check which number divides the integer without leaving a remainder, starting from 2 upwards.


# Day 26: Task

*Question 51: Reverse a Number*

Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.

Example:
typescript
reverseNumber(1234); // Output: 4321
reverseNumber(567);  // Output: 765


*Question 52: Find the Average of Numbers in a String*

Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.

Example:
typescript
averageOfNumbersInString('The numbers are 12, 15, and 20.'); // Output: 15.666...
averageOfNumbersInString('No numbers here!'); // Output: NaN

---

# Day 27: Task

*Question 53: Count the Number of Divisors*
*Description:*
Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.

*Example:*
typescript
Input: 12
Output: 6  // (1, 2, 3, 4, 6, 12)

Input: 7
Output: 2  // (1, 7)


*Hint:* Use a loop to check each number from 1 to the given number to see if it divides the number evenly.

---

*Question 54: Check if a Number is a Perfect Square*
*Description:*
Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect square is a number that is the square of an integer.

*Example:*
typescript
Input: 16
Output: true  // (4 * 4 = 16)

Input: 20
Output: false


*Hint:* Use the square root function Math.sqrt() and check if the result is an integer.

---

# Day 28: Task

*Question 55: Armstrong Number Checker (Without Using split)*
*Problem:* Check if a given number is an Armstrong number. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

*JHint:*
1. First, count the number of digits in the given number.
2. Then, iterate through each digit by extracting it one by one.
3. Raise each digit to the power of the total number of digits and accumulate the result.
4. Finally, compare the accumulated sum to the original number to determine if it is an Armstrong number.


*Question 56: Find the LCM (Least Common Multiple)*
*Problem:* Find the Least Common Multiple (LCM) of two numbers. LCM is the smallest number that is a multiple of both given numbers.

*Hint:*
1. Calculate the Greatest Common Divisor (GCD) of the two numbers using the Euclidean algorithm.
2. Use the GCD to find the LCM with the formula:
   \[
   \text{LCM}(a, b) = \frac{|a \times b|}{\text{GCD}(a, b)}
   \]
   
---

# Day 29: Task

*Question 57: Calculate the Product of Non-Zero Digits*

Description:

Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.

Example:
typescript
Input: 4056
Output: 120  // 4 * 5 * 6 = 120

Input: 1002
Output: 2  // 1 * 2 = 2


Hint: Loop through each digit, skip zeros, and multiply the rest.

---

*Question 58: Find the Difference Between the Largest and Smallest Digit*

Description:

Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.

Example:
typescript
Input: 7593
Output: 6  // 9 - 3 = 6

Input: 12345
Output: 4  // 5 - 1 = 4


Hint: Convert the number to a string or use a loop to identify the largest and smallest digits, then calculate their difference.



---
# Day 30: Task


*Question 59: Convert Number to Words*

*Problem:*
Write a TypeScript function that takes a number between 0 and 99 and returns the number in words. For example, if the input is 45, the output should be "Forty-Five".

*Hint:*
- Create arrays for single digits (0-9), teens (10-19), and tens (20, 30, ... 90).
- Handle different cases separately: numbers less than 10, between 10 and 19, and between 20 and 99.

*Function Signature:*
typescript
function numberToWords(num: number): string {
  // Your code here
}


---

*Question 60: Calculate the Sum of the First n Natural Numbers*

*Problem:*
Write a TypeScript function that takes a positive integer n and returns the sum of the first n natural numbers. For example, if n = 5, the output should be 15 (because 1 + 2 + 3 + 4 + 5 = 15).

*Hint:*
- Use the formula for the sum of the first n natural numbers: \(\text{Sum} = \frac{n \times (n + 1)}{2}\).
- Alternatively, implement the sum using a loop that adds each number from 1 to n.

*Function Signature:*
typescript
function sumOfNaturalNumbers(n: number): number {
  // Your code here
}

---
