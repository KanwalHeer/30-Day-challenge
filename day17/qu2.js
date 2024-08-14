// Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.
// *Example:*
// typescript
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
function findLongestWord(sentence) {
    var longestWord = "";
    var currentWord = "";
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var char = sentence_1[_i];
        if (char === " ") {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";
        }
        else {
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
