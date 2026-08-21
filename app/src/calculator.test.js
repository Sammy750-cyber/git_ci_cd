import { describe, it, expect } from 'vitest';
import { add, subtract } from './calculator.js';

describe('calculator', () => {
    it('should add two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });

    it('should subtract two numbers correctly', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(0, 1)).toBe(-1);
    });

    it('should multiply two numbers correctly', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 1)).toBe(-1);
    });

    it('should divide two numbers correctly', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-4, 2)).toBe(-2);
    });
});