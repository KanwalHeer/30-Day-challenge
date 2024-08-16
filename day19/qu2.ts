// ### Question 2: String Character Frequency
// *Problem Statement:*
// Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.

// *Example:*
// typescript
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

// *Hint:*
// Use an object to store the frequency of each character. Iterate over the string and update the count for each character

function CharacterFrequency(str: string): { [key: string]: number } {
  // Initialize an empty object to store character frequencies
  const frequency = {};

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character is already in the object, increment its count
    if (frequency[char]) {
      frequency[char]++;
    } else {
      // If the character is not in the object, initialize its count to 1
      frequency[char] = 1;
    }
  }

  return frequency;
}

console.log(CharacterFrequency("kanwal"));
