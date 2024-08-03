//CALCULATOR IN FUNCTIONAL PROGRAMMING
function Calculator1(num1: number, num2: number, operator: string) {
  function add(a: number, b: number) {
    return a + b;
  }

  function subtract(a: number, b: number) {
    return a - b;
  }

  function multiply(a: number, b: number) {
    return a * b;
  }

  function divide(a: number, b: number) {
    return a / b;
  }

  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    if (num1 !== 0 && num2 !== 0) {
      return divide(num1, num2);
    } else {
      return "DIVISION WITH ZERO RETURN INFINITY!";
    }
  }
}

console.log(Calculator1(4, 3, "+"));
console.log(Calculator1(4, 3, "-"));
console.log(Calculator1(4, 3, "*"));
console.log(Calculator1(9, 3, "/"));
console.log(Calculator1(2, 0, "/"));

//CALCULATOR IN OBJECT ORIENTED PROGRAMMING

interface calculatorType {
  num1: number;
  num2: number;
}

class calculator implements calculatorType {
  num1 = 0;
  num2 = 0;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }
  sustract() {
    return this.num1 - this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
}

let mycalculator = new calculator(2, 2);
console.log(mycalculator.add());
console.log(mycalculator.sustract());
console.log(mycalculator.multiply());
console.log(mycalculator.divide());
