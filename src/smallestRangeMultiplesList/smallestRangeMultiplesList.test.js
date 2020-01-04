// You have k lists of sorted integers.
// Find the smallest range that includes at least one number from each of the k lists.

// For example,
// List 1: [4, 10, 15, 24, 26]
// List 2: [0, 9, 12, 20]
// List 3: [5, 18, 22, 30]

// The smallest range here would be [20, 24] as it contains 24 from list 1, 20 from list 2, and 22 from list 3.

import {
    rangeMultiplesListNumbersBruteForce,
    rangeMultiplesListNumbersMinBase
} from './smallestRangeMultiplesList.js';

let lists = [
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30]
];

let expectedOutput = [20, 24];

describe('rangeMultiplesListNumbers', () => {
    describe('rangeMultiplesListNumbersBruteForce()', () => {
        test('should return a range the 3 list have in common', () => {
            let output = rangeMultiplesListNumbersBruteForce(lists);

            expect(output).toEqual(expectedOutput);
        });
    });

    describe('rangeMultiplesListNumbersMinBase()', () => {
        test('should return a range the 3 list have in common', () => {
            let output = rangeMultiplesListNumbersMinBase(lists);

            expect(output).toEqual(expectedOutput);
        });
    });
});
