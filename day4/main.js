// Question 7: Find Duplicate Numbers in an Array
// *Description:*
// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.
function findDuplicates(numbers) {
    var duplicateArr = [];
    var newArr = [];
    for (var i = 0; i < numbers.length; i++) {
        var currentNumber = numbers[i];
        var isDuplicate = false;
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j] === currentNumber) {
                isDuplicate = true;
            }
        }
        if (isDuplicate) {
            var isDuplicateAlreadyRecorded = false;
            for (var k = 0; k < duplicateArr.length; k++) {
                if (duplicateArr[k] === currentNumber) {
                    isDuplicateAlreadyRecorded = true;
                }
            }
            if (!isDuplicateAlreadyRecorded) {
                duplicateArr.push(currentNumber);
            }
        }
        else {
            newArr.push(currentNumber);
        }
    }
    return duplicateArr;
}
// Example usage:
var numbers = [1, 2, 3, 2, 4, 5, 5, 6, 3];
var duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [2, 5]
function printTopStudents(students) {
    students.forEach(function (student) {
        if (student.marks > 80) {
            console.log("Name :".concat(student.name, " , Age :").concat(student.age, " and Marks :").concat(student.marks));
        }
    });
}
var students = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 },
];
printTopStudents(students);
