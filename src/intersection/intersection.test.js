import { intersection } from './intersection.js';

describe('factorialTrailingZeros', () => {
    test('it works', () => {
        let input = [
            [1, 5, 4, 2],
            [8, 91, 4, 1, 3]
        ];
        let output = intersection(...input);
        let expectedOutput = [1, 4];

        expect(output).toEqual(expectedOutput);
    });
});
