function replaceVowels(str: string): string {
    const vowels = 'aeiouAEIOU';
    let result = '';

    for (const char of str) {
        if (vowels.includes(char)) {
            result += '*';
        } else {
            result += char;
        }
    }

    return result;
}

// Example usage:
console.log(replaceVowels('Hello World')); // Output: 'H*ll* W*rld'
console.log(replaceVowels('TypeScript'));  // Output: 'Typ*Scr*pt'
