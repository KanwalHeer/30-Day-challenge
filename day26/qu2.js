function averageOfNumbersInString(str) {
    var numbers = [];
    var currentNumber = '';
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i])) || str[i] === '.') {
            currentNumber += str[i];
        }
        else if (currentNumber !== '') {
            numbers.push(parseFloat(currentNumber));
            currentNumber = '';
        }
    }
    if (currentNumber !== '') {
        numbers.push(parseFloat(currentNumber));
    }
    if (numbers.length === 0) {
        return NaN; // Return NaN if no numbers are found
    }
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666...
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN
