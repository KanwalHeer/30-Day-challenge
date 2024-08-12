function areAnagrams(str1: string, str2: string): boolean {
  // Helper function to count frequency of characters in a string
  function countCharacters(str: string): { [key: string]: number } {
    const count: { [key: string]: number } = {};
    for (const char of str) {
      if (char !== " ") {
        // Ignore spaces if they are not considered
        count[char] = (count[char] || 0) + 1;
      }
    }
    return count;
  }

  // Check if lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Get character counts for both strings
  const count1 = countCharacters(str1);
  const count2 = countCharacters(str2);

  // Compare counts
  for (const char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
