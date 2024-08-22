function findSmallestDivisor(number: number): number {
    // Start checking from 2 upwards
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            return i; // Return the first number that divides the input number completely
        }
    }
    // If no divisor is found, return the number itself (this happens only if the number is prime)
    return number;
}

// Example usage:
const number = 15;
console.log(findSmallestDivisor(number)); // Output: 3
