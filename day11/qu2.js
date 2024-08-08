function firstNonRepeatedCharacter(s) {
    for (var i = 0; i < s.length; i++) {
        var isUnique = true;
        for (var j = 0; j < s.length; j++) {
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
var s = "swiss";
console.log(firstNonRepeatedCharacter(s));
// Expected output: "w"
