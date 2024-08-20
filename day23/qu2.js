function convertToBinary(number) {
    if (number === 0) {
        return "0";
    }
    var binaryRepresentation = "";
    var num = number;
    while (num > 0) {
        var remainder = num % 2;
        binaryRepresentation = remainder.toString() + binaryRepresentation;
        num = Math.floor(num / 2);
    }
    return binaryRepresentation;
}
console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(0)); // Output: "0"
