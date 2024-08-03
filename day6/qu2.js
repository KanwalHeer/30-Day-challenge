function multipleArrays(mixArray) {
    var numArray = [];
    var strArray = [];
    var booleanArray = [];
    for (var i = 0; i < mixArray.length; i++) {
        if (typeof mixArray[i] === "number") {
            numArray.push(mixArray[i]);
        }
        else if (typeof mixArray[i] === "string") {
            strArray.push(mixArray[i]);
        }
        else if (typeof mixArray[i] === "boolean") {
            booleanArray.push(mixArray[i]);
        }
    }
    return { numArray: numArray, strArray: strArray, booleanArray: booleanArray };
}
console.log(multipleArrays([1, "kanwal", true, "fiza", "heer", false, 3]));
