function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
// Example usage
console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(0)); // Output: 1 (0! is 1 by definition)
