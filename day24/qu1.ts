function generateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibonacci: number[] = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    
    return fibonacci;
}

// Example usage:
console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
