function firstNonRepeatedCharacter(s: string): string {
  for (let i = 0; i < s.length; i++) {
    let isUnique = true;

    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[i] === s[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      return s[i];
    }
  }

  return "";
}

// Example Usage:
const s = "swiss";
console.log(firstNonRepeatedCharacter(s));
// Expected output: "w"
