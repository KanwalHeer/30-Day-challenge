// Question 2: Extract First Letters from String Array*
// Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.
// *Hints:*
// - Iterate through each name in the array.
// - Extract the first letter of each name without using built-in methods.
function extractFirstLetters(names) {
    var newarray = [];
    for (var i = 0; i < names.length; i++) {
        newarray.push(names[i][0]);
    }
    return newarray;
}
console.log(extractFirstLetters(["Filza", "Naimal", "Sualiha", "Fiza"]));
