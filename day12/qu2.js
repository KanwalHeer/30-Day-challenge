// *Problem:*
// You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.
// *Example:*
// typescript
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// *Note:*
// * You must modify the array in-place.
// * The relative order of the non-zero elements should remain the same.
// function moveZeroes(arr: number[]): void {
//   let nonzero = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[nonzero], arr[i]] = [arr[i], arr[nonzero]];
//       nonzero++;
//     }
//   }
// }
// const array = [0, 1, 2, 0, 3, 12];
// moveZeroes(array);
// console.log(array); // Output: [1, 3, 12, 0, 0]
function abs(a) {
    var _a;
    var nonz = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== 0) {
            _a = [a[i], a[nonz]], a[nonz] = _a[0], a[i] = _a[1];
            nonz++;
        }
    }
}
var arr = [0, 1, 0, 2, 0, 3, 4, 13];
abs(arr);
console.log(arr);
