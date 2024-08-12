Day 15

### Question 1: Anagrams

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

### Question 2: Reverse Words in a Sentence

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

### Detailed Steps:

*Anagrams:*

1. *Normalize Case:* 
   - Convert each character to lowercase.
   - Example: Convert "Listen" and "Silent" to "listen" and "silent".

2. *Count Characters:*
   - Use an array of size 26 for lowercase letters.
   - Traverse the first string and increment counts in the array for each character.
   - Traverse the second string and decrement counts in the array for each character.
   - If the array contains only zeroes after processing both strings, they are anagrams.

3. *Compare Counts:*
   - After processing both strings, ensure that the frequency counts match exactly.

*Reverse Words in a Sentence:*

1. *Identify Word Boundaries:*
   - Loop through the sentence and track the start of a word when encountering a non-space character.
   - Track the end of a word when encountering a space or the end of the sentence.

2. *Extract Words:*
   - Use substring operations to extract words between the tracked start and end indices.
   - Store these words in an array.

3. *Reverse Order:*
   - Use a loop to iterate from the end of the word array to the beginning, adding each word to a new array.

4. *Reconstruct Sentence:*
   - Build the final string by joining words from the reversed array with spaces between them.