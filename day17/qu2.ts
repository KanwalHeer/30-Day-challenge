// Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.

// *Example:*
// typescript
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"



function findLongestWord(sentence: string): string {
  let longestWord = "";
  let currentWord = "";

  for (const char of sentence) {
    if (char === " ") {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }

      currentWord = "";
    } else {
      currentWord += char;
    }
  }

  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }

  return longestWord;
}

// Test cases
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"

