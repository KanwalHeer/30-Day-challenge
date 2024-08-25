### Question 1: Armstrong Number Checker (Without Using split)
*Problem:* Check if a given number is an Armstrong number. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

*JHint:*
1. First, count the number of digits in the given number.
2. Then, iterate through each digit by extracting it one by one.
3. Raise each digit to the power of the total number of digits and accumulate the result.
4. Finally, compare the accumulated sum to the original number to determine if it is an Armstrong number.


### Question 2: Find the LCM (Least Common Multiple)
*Problem:* Find the Least Common Multiple (LCM) of two numbers. LCM is the smallest number that is a multiple of both given numbers.

*Hint:*
1. Calculate the Greatest Common Divisor (GCD) of the two numbers using the Euclidean algorithm.
2. Use the GCD to find the LCM with the formula:
   \[
   \text{LCM}(a, b) = \frac{|a \times b|}{\text{GCD}(a, b)}
   \]
