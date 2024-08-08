function mergeSortedArrays(arr1, arr2) {
    var result = [];
    var pointer1 = 0;
    var pointer2 = 0;
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] <= arr2[pointer2]) {
            result.push(arr1[pointer1]);
            pointer1++;
        }
        else {
            result.push(arr2[pointer2]);
            pointer2++;
        }
    }
    while (pointer1 < arr1.length) {
        result.push(arr1[pointer1]);
        pointer1++;
    }
    while (pointer2 < arr2.length) {
        result.push(arr2[pointer2]);
        pointer2++;
    }
    return result;
}
// Example Usage:
var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
