function findGCD(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a: number, b: number): number {
    return Math.abs(a * b) / findGCD(a, b);
}

// Example Usage
console.log(findLCM(4, 5)); // 20
console.log(findLCM(12, 15)); // 60

