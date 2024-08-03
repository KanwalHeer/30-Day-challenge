//CALCULATOR IN FUNCTIONAL PROGRAMMING
function Calculator1(num1, num2, operator) {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        if (num1 !== 0 && num2 !== 0) {
            return divide(num1, num2);
        }
        else {
            return "DIVISION WITH ZERO RETURN INFINITY!";
        }
    }
}
console.log(Calculator1(4, 3, "+"));
console.log(Calculator1(4, 3, "-"));
console.log(Calculator1(4, 3, "*"));
console.log(Calculator1(9, 3, "/"));
console.log(Calculator1(2, 0, "/"));
var calculator = /** @class */ (function () {
    function calculator(num1, num2) {
        this.num1 = 0;
        this.num2 = 0;
        this.num1 = num1;
        this.num2 = num2;
    }
    calculator.prototype.add = function () {
        return this.num1 + this.num2;
    };
    calculator.prototype.sustract = function () {
        return this.num1 - this.num2;
    };
    calculator.prototype.multiply = function () {
        return this.num1 * this.num2;
    };
    calculator.prototype.divide = function () {
        return this.num1 / this.num2;
    };
    return calculator;
}());
var mycalculator = new calculator(2, 2);
console.log(mycalculator.add());
console.log(mycalculator.sustract());
console.log(mycalculator.multiply());
console.log(mycalculator.divide());
