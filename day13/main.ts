function countVowels(str: string): number {
  const vowelChars = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    let isVowel = false;
    for (let j = 0; j < vowelChars.length; j++) {
      if (char === vowelChars[j]) {
        isVowel = true;
        break;
      }
    }

    if (isVowel) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("TypeScript")); // Output: 3

function findMissingNumber(arr: number[]): number {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

// Example usage:
console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
