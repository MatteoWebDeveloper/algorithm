import {
    numberToWord
} from './numberToWord.js';

describe('numberToWord', () => {
    test('should output numbers 0-9', () => {
        expect(numberToWord(0)).toBe('zero');
        expect(numberToWord(1)).toBe('one');
        expect(numberToWord(2)).toBe('two');
        expect(numberToWord(3)).toBe('three');
        expect(numberToWord(9)).toBe('nine');
    });

    test('should output numbers 10-19', () => {
        // double digit
        expect(numberToWord(10)).toBe('ten');
        expect(numberToWord(11)).toBe('eleven');
        expect(numberToWord(12)).toBe('twelve');

        // teen
        expect(numberToWord(13)).toBe('thirteen');
        expect(numberToWord(14)).toBe('fourteen');
        expect(numberToWord(19)).toBe('nineteen');
    });

    test('should output 20-99', () => {
        // twenty
        expect(numberToWord(20)).toBe('twenty');
        expect(numberToWord(21)).toBe('twenty one');
        expect(numberToWord(29)).toBe('twenty nine');

        // thirty
        expect(numberToWord(30)).toBe('thirty');
        expect(numberToWord(31)).toBe('thirty one');

        expect(numberToWord(99)).toBe('ninty nine');
    });

    test('should output 100-999', () => {
        // three digit
        expect(numberToWord(100)).toBe('one hundred');
        expect(numberToWord(101)).toBe('one hundred one');
        expect(numberToWord(102)).toBe('one hundred two');

        expect(numberToWord(111)).toBe('one hundred eleven');

        expect(numberToWord(121)).toBe('one hundred twenty one');

        expect(numberToWord(200)).toBe('two hundred');

        expect(numberToWord(999)).toBe('nine hundred ninty nine');
    });

    test('should output 1000', () => {
        // four digit
        expect(numberToWord(1000)).toBe('one thousand');
        expect(numberToWord(9999)).toBe('nine thousand nine hundred ninty nine');
    });
});