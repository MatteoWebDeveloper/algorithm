import { updateInventory } from './updateInventory.js';

describe('updateInventory', () => {
    test('should update inventory in alphabetical order 1', () => {
        // Example inventory lists
        var curInv = [
            [21, 'Bowling Ball'],
            [2, 'Dirty Sock'],
            [1, 'Hair Pin'],
            [5, 'Microphone']
        ];

        var newInv = [
            [2, 'Hair Pin'],
            [3, 'Half-Eaten Apple'],
            [67, 'Bowling Ball'],
            [7, 'Toothpaste']
        ];

        let expectedOutput = [
            [88, 'Bowling Ball'],
            [2, 'Dirty Sock'],
            [3, 'Hair Pin'],
            [3, 'Half-Eaten Apple'],
            [5, 'Microphone'],
            [7, 'Toothpaste']
        ];

        expect(updateInventory(curInv, newInv)).toEqual(expectedOutput);
    });

    test('should update inventory in alphabetical order 2', () => {
        var curInv = [
            [21, 'Bowling Ball'],
            [2, 'Dirty Sock'],
            [1, 'Hair Pin'],
            [5, 'Microphone']
        ];

        var newInv = [
            [2, 'Hair Pin'],
            [3, 'Half-Eaten Apple'],
            [67, 'Bowling Ball'],
            [7, 'Toothpaste']
        ];

        let expectedOutput = [
            [88, 'Bowling Ball'],
            [2, 'Dirty Sock'],
            [3, 'Hair Pin'],
            [3, 'Half-Eaten Apple'],
            [5, 'Microphone'],
            [7, 'Toothpaste']
        ];

        expect(updateInventory(curInv, newInv)).toEqual(expectedOutput);
    });
});
