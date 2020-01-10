import { permutationAlone } from './permutationAlone.js';

describe('permutationAlone', () => {
    test('should output 2 permutation', () => {
        // Example inventory lists
        const input = '12';

        let expectedOutput = ['12', '21'];

        expect(permutationAlone(input)).toEqual(expectedOutput);
    });

    test('should output 6 permutation', () => {
        // Example inventory lists
        const input = '123';

        let expectedOutput = ['123', '132', '213', '231', '312', '321'];

        expect(permutationAlone(input)).toEqual(expectedOutput);
    });

    test('should output 24 permutation', () => {
        // Example inventory lists
        const input = '1234';

        let expectedOutput = [
            '1234',
            '1243',
            '1324',
            '1342',
            '1423',
            '1432',

            '2134',
            '2143',
            '2314',
            '2341',
            '2413',
            '2431',

            '3124',
            '3142',
            '3214',
            '3241',
            '3412',
            '3421',

            '4123',
            '4132',
            '4213',
            '4231',
            '4312',
            '4321'
        ];

        expect(permutationAlone(input)).toEqual(expectedOutput);
    });

    test('should output 6 permutation', () => {
        // Example inventory lists
        const input = 'aab';

        let expectedOutput = ['aba', 'aba'];

        expect(permutationAlone(input)).toEqual(expectedOutput);
    });
});
