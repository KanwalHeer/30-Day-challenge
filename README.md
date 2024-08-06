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


# Day 9: Task

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


