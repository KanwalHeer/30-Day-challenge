import { calculateArea } from "./qu1fille1";
import { calculatePerimeter } from "./qu1fille1";
const width = 5;
const height = 10;

// Calculate and print the area and perimeter
const area = calculateArea(width, height);
const perimeter = calculatePerimeter(width, height);

console.log(`Area: ${area}`);          // Output: Area: 50
console.log(`Perimeter: ${perimeter}`); // Output: Perimeter: 30