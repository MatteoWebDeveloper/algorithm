import { diagonalDifference } from './diagonalDifference.js';

describe('diagonalDifference', () => {
    test('should positive diagonal difference on 3x3 square', () => {
        let output = diagonalDifference([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);

        expect(output).toBe(0);
    });

    test('should negative diagonal difference on 3x3 square', () => {
        let output = diagonalDifference([
            [1, 2, -3],
            [4, 5, -6],
            [7, 8, -9]
        ]);

        expect(output).toBe(12);
    });

    test('should negative diagonal difference on 4x4 square', () => {
        let output = diagonalDifference([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ]);

        expect(output).toBe(0);
    });
});
