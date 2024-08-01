// Question 7: Find Duplicate Numbers in an Array

// *Description:*

// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.

function findDuplicates(numbers: number[]): number[] {
  const duplicateArr: number[] = [];
  const newArr: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === currentNumber) {
        isDuplicate = true;
      }
    }

    if (isDuplicate) {
      let isDuplicateAlreadyRecorded = false;
      for (let k = 0; k < duplicateArr.length; k++) {
        if (duplicateArr[k] === currentNumber) {
          isDuplicateAlreadyRecorded = true;
        }
      }

      if (!isDuplicateAlreadyRecorded) {
        duplicateArr.push(currentNumber);
      }
    } else {
      newArr.push(currentNumber);
    }
  }
  return duplicateArr;
}

// Example usage:
const numbers = [1, 2, 3, 2, 4, 5, 5, 6, 3];
const duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [2, 5]

// ---

//  Question 8: Filter Students with Marks Greater than 80

// *Description:*

// Create an array of objects where each object represents a student with properties name, age, and marks. Write a function that filters and prints the data of students who have marks greater than 80.

interface Student {
  name: string;
  age: number;
  marks: number;
}

function printTopStudents(students: Student[]): void {
  students.forEach((student) => {
    if (student.marks > 80) {
      console.log(
        `Name :${student.name} , Age :${student.age} and Marks :${student.marks}`
      );
    }
  });
}

const students: Student[] = [
  { name: "Ali", age: 20, marks: 75 },
  { name: "Sara", age: 22, marks: 85 },
  { name: "John", age: 21, marks: 90 },
];

printTopStudents(students);
