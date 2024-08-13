function concatenateFirstLetters(arr1, arr2, arr3) {
    function getFirstLetters(arr) {
        var result = "";
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > 0) {
                result += arr[i][0];
            }
        }
        return result;
    }
    var firstLetters1 = getFirstLetters(arr1);
    var firstLetters2 = getFirstLetters(arr2);
    var firstLetters3 = getFirstLetters(arr3);
    return [firstLetters1, firstLetters2, firstLetters3];
}
console.log(concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"]));
// ["abc", "def", "ghk"]
console.log(concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"]));
// ["sm", "sp", "gc"]
console.log(concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"]));
// ["tcl", "ccs", "dsc"]
