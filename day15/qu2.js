function reverseWords(sentence) {
    var words = [];
    var currentWord = '';
    // Traverse the sentence to extract words
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            // When a space is encountered, push the current word and reset it
            if (currentWord.length > 0) {
                words.push(currentWord);
                currentWord = '';
            }
        }
        else {
            // Append characters to the current word
            currentWord += sentence[i];
        }
    }
    // Push the last word if any
    if (currentWord.length > 0) {
        words.push(currentWord);
    }
    // Reverse the array of words
    words.reverse();
    // Join the words to form the reversed sentence
    return words.join(' ');
}
// Example usage
console.log(reverseWords("hello world")); // Output: "world hello"
console.log(reverseWords("  This is  a test  ")); // Output: "test a is This"
