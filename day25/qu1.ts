// ### Question 1: Calculate the Difference Between the Sum of Odd and Even Digits
// *Problem:* You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference between these two sums. The difference should be positive.

// *Example:*
// - Input: number = 1234
// - Output: 2 (Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)

// *Hint:* Convert the number to a string, then check each digit to see if it’s odd or even, and calculate the respective sums.

// ---


function calculateDifference(number: number): number {
    let oddSum = 0;
    let evenSum = 0;

    // Convert the number to a string to iterate through each digit
    const digits = number.toString();

    for (let digit of digits) {
        const digitNumber = parseInt(digit, 10);

        if (digitNumber % 2 === 0) {
            evenSum += digitNumber;
        } else {
            oddSum += digitNumber;
        }
    }

    // Calculate the difference
    let difference: number;
    if (oddSum > evenSum) {
        difference = oddSum - evenSum;
    } else {
        difference = evenSum - oddSum;
    }

    return difference;
}

// Example usage:
const number = 1234;
console.log(calculateDifference(number)); // Output: 2
