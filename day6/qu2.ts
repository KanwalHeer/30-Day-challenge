function multipleArrays(mixArray: any[]
):{ numArray:number[],strArray: string[],booleanArray: boolean[]}{

  let numArray: number[] = [];
  let strArray: string[] = [];
  let booleanArray: boolean[] = [];

  for (let i = 0; i < mixArray.length; i++) {
    if (typeof mixArray[i] === "number") {
      numArray.push(mixArray[i]);
    } else if (typeof mixArray[i] === "string") {
      strArray.push(mixArray[i]);
    } else if (typeof mixArray[i] === "boolean") {
      booleanArray.push(mixArray[i]);
    }
  }
  return {numArray,strArray,booleanArray}
  
}
console.log(multipleArrays([1,"kanwal",true,"fiza","heer",false,3]));

