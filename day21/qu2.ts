function countConsonants(str: string): number {
    let count = 0;

    // Define a function to check if a character is a vowel
    function isVowel(char: string): boolean {
        // Check if the character is one of the vowels
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
               char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U';
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Check if the character is an alphabetical letter
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            // Check if the character is not a vowel
            if (!isVowel(char)) {
                count++;
            }
        }
    }

    return count;
}

// Example usage
console.log(countConsonants("hello")); // Output: 3
console.log(countConsonants("TypeScript")); // Output: 7
