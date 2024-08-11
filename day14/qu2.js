// ### Question 2: *Check if a String is a Palindrome*
// *Problem Statement:*  
// Write a function isPalindrome that takes a string as input and checks if it reads the same backward as forward. The function should return true if the string is a palindrome and false otherwise.
// *Example:*  
// typescript
// isPalindrome("madam"); // Output: true
// isPalindrome("hello"); // Output: false
// *Hints:*  
// 1. *Step 1: Normalize the String*
//    - Convert the string to lowercase to handle case sensitivity (str = str.toLowerCase();).
//    - If necessary, remove non-alphanumeric characters (e.g., spaces, punctuation) to focus on the actual content.
// 2. *Step 2: Use Two-Pointer Technique*
//    - Initialize two pointers: one at the start of the string (let left = 0;) and one at the end (let right = str.length - 1;).
//    - Use a while loop to compare characters at these pointers. Continue looping until the two pointers meet in the middle.
//    - If at any point the characters at left and right pointers do not match, return false.
// 3. *Step 3: Complete the Loop*
//    - If the loop completes without finding a mismatch, the string is a palindrome. Return true.
// 4. *Step 4: Test with Various Strings*
//    - Test the function with both palindromes and non-palindromes to verify that it works as expected.
function palindromes(str) {
    var stris = str.toLowerCase();
    var left = 0;
    var right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(palindromes("madam"));
console.log(palindromes("hello"));
