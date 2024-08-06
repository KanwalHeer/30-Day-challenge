// circle.ts

import { Shape } from './qu2shap';

// Define and export the Circle class that implements Shape interface
export class Circle implements Shape {
    name: string;
    area: number;
    private radius: number;

    constructor(name: string, radius: number) {
        this.name = name;
        this.radius = radius;
        this.area = this.calculateArea(); // Initialize area
    }

    // Implement the calculateArea method
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
