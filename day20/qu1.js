// ### Question 1: Check for Prime Number
// *Problem:*
// Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.
// *Hint:*
// - Use a loop to check divisibility from 2 up to the square root of the number.
// - If the number is divisible by any of these, it is not prime.
// typescript
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (var i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            console.log(i);
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
// console.log(isPrime(5));
// console.log(isPrime(3));
// console.log(isPrime(9));
