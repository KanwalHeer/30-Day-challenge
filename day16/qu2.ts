function concatenateFirstLetters(
  arr1: string[],
  arr2: string[],
  arr3: string[]
): string[] {
  function getFirstLetters(arr: string[]): string {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        result += arr[i][0];
      }
    }
    return result;
  }

  let firstLetters1 = getFirstLetters(arr1);
  let firstLetters2 = getFirstLetters(arr2);
  let firstLetters3 = getFirstLetters(arr3);

  return [firstLetters1, firstLetters2, firstLetters3];
}

console.log(
  concatenateFirstLetters(
    ["apple", "banana", "cherry"],
    ["dog", "elephant", "frog"],
    ["grape", "honeydew", "kiwi"]
  )
);
// ["abc", "def", "ghk"]

console.log(
  concatenateFirstLetters(
    ["sun", "moon"],
    ["star", "planet"],
    ["galaxy", "comet"]
  )
);
// ["sm", "sp", "gc"]

console.log(
  concatenateFirstLetters(
    ["table", "chair", "lamp"],
    ["carpet", "curtain", "sofa"],
    ["desk", "shelf", "cabinet"]
  )
);
// ["tcl", "ccs", "dsc"]
