// Question 19: Implement a Basic Counter
// Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:
// increment(): void - Increments the counter by 1.
// decrement(): void - Decrements the counter by 1.
// getValue(): number - Returns the current value of the counter.
// Example Usage:
var Counter = /** @class */ (function () {
    function Counter() {
        this.value = 0;
    }
    //   constructor(value: number) {
    //     this.value = value;
    //   }
    Counter.prototype.increment = function () {
        return this.value++;
    };
    Counter.prototype.decrement = function () {
        return this.value--;
    };
    Counter.prototype.getValue = function () {
        return this.value;
    };
    return Counter;
}());
var counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
counter.decrement();
console.log(counter.getValue()); // Output: 1
