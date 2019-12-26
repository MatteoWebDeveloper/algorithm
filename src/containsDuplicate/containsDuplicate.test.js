import {
    containsDuplicate
} from './containsDuplicate.js';

describe('containsDuplicate', () => {
    test('should find two positive numbers have a sum to match target', () => {
        expect(containsDuplicate([1, 1, 1])).toBe(true);
    })

    test('should NOT use the same number to find the sum to match target', () => {
        expect(containsDuplicate([1, 2, 3])).toBe(false);
    })
})