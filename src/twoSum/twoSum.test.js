import {
    twoSum
} from './twoSum.js';

describe('twoSum', () => {
    test('should find two positive numbers have a sum to match target', () => {
        expect(twoSum([1, 3, 2, 4], 5)).toEqual([1, 4]);
    })

    test('should NOT use the same number to find the sum to match target', () => {
        expect(twoSum([1, 1, 1, 2], 4)).toEqual(null);
    })
})