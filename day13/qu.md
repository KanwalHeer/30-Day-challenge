Day 13

### Question 1: Count Vowels in a String
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

### Question 2: Find the Missing Number in an Array
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