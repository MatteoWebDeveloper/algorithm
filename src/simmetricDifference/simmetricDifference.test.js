import { simmetricDifference } from './simmetricDifference.js';

describe('simmetricDifference', () => {
    test('simmetricDifference()', () => {
        expect(simmetricDifference([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
        expect(simmetricDifference([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);

        expect(simmetricDifference([1, 2, 3, 3], [5, 2, 1, 4])).toEqual([
            3,
            4,
            5
        ]);

        expect(simmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([
            1,
            4,
            5
        ]);

        expect(
            simmetricDifference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
        ).toEqual([1, 4, 5]);
    });
});
