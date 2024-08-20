function sumOfDigits(num) {
    var sum = 0;
    var number = Math.abs(num); // Handle negative numbers by taking the absolute value
    while (number > 0) {
        // Extract the last digit and add it to the sum
        sum += number % 10;
        // Remove the last digit from the number
        number = Math.floor(number / 10);
    }
    return sum;
}
// Example usage
console.log(sumOfDigits(123)); // Output: 6
console.log(sumOfDigits(4567)); // Output: 22
