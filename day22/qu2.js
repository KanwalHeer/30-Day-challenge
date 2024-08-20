function calculatePower(b, e) {
    if (e === 0) {
        return 1; // Any number raised to the power of 0 is 1
    }
    var result = 1;
    for (var i = 0; i < e; i++) {
        result *= b; // Multiply result by base b
    }
    return result;
}
// Example usage
console.log(calculatePower(2, 3)); // Output: 8
console.log(calculatePower(5, 0)); // Output: 1
