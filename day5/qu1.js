// *Question 1: Array Comparison and Manipulation (Updated)*
// Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:
// 1. *If the lengths of both arrays are the same and all elements are the same:*
//    - Merge both arrays into one array.
//    - Multiply all elements of the merged array to produce a single number.
//    - Return the product.
// 2. *If the lengths of both arrays are different:*
//    - Merge both arrays into one array.
//    - Return the middle element of the merged array.
// 3. *If the lengths of both arrays are the same but elements are different:*
//    - Make the elements of both arrays the same by adding corresponding elements.
//    - Merge the arrays.
//    - Return the sum of the elements of the resulting merged array.
function multipleOperations(arr1, arr2) {
    function mergeArray(a, b) {
        var merge = [];
        for (var i = 0; i < a.length; i++) {
            merge.push(a[i]);
        }
        for (var j = 0; j < b.length; j++) {
            merge.push(b[j]);
        }
        return merge;
    }
    function arraysAreIdentical(a, b) {
        if (a.length !== b.length)
            return false;
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    }
    function makeArraysIdentical(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            arr2[i] = arr1[i];
        }
    }
    function calculateProduct(num) {
        var product = 1;
        for (var i = 0; i < num.length; i++) {
            product *= num[i];
        }
        return product;
    }
    function calculateSum(num) {
        var sum = 0;
        for (var i = 0; i < num.length; i++) {
            sum += num[i];
        }
        return sum;
    }
    var len1 = arr1.length;
    var len2 = arr2.length;
    if (len1 === len1 && arraysAreIdentical(arr1, arr2)) {
        var mergedArray = mergeArray(arr1, arr2);
        return calculateProduct(mergedArray);
    }
    if (len1 !== len2) {
        var mergedArray1 = mergeArray(arr1, arr2);
        var middleElemen = Math.floor(mergedArray1.length / 2);
        return mergedArray1[middleElemen];
    }
    if (len1 === len2 && !arraysAreIdentical(arr1, arr2)) {
        makeArraysIdentical(arr1, arr2);
        var mergedArray = mergeArray(arr1, arr2);
        return calculateSum(mergedArray);
    }
    return 0;
}
console.log(multipleOperations([1, 3], [1, 3])); // Example output: Product of [1, 3, 1, 3] which is 18
console.log(multipleOperations([1, 2], [6, 4, 5])); // Example output: Middle element of [1, 2, 3, 4, 5] which is 3
console.log(multipleOperations([2, 2], [3, 4])); // Example output: Sum of [1, 2, 1, 2] which is 6
