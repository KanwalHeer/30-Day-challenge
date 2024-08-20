function countDigits(num) {
    num = Math.abs(num); // Handle negative numbers
    var count = 0;
    if (num === 0) {
        return 1; // Special case for 0, which has exactly 1 digit
    }
    while (num > 0) {
        num = Math.floor(num / 10); // Remove the last digit
        count++;
    }
    return count;
}
// Example usage
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(987)); // Output: 3
