import {
    patternMatch
} from './patternMatch.js';

describe('patternMatch', () => {
    test('should match when pattern character is the same character in string', () => {
        expect(patternMatch('a', 'a')).toBe(true);
        expect(patternMatch('aa', 'a')).toBe(false);
        expect(patternMatch('ab', 'ab')).toBe(true);
    });

    test("should match when pattern is '.' and string has any character", () => {
        expect(patternMatch('a', '.')).toBe(true);
        expect(patternMatch('aa', '.')).toBe(false);
        expect(patternMatch('ab', 'a.')).toBe(true);
        expect(patternMatch('abc', 'a..')).toBe(true);
        expect(patternMatch('abcd', 'a..')).toBe(false);
    });

    test("should match when pattern is '?' and string has 0 or 1 of the previous character", () => {
        expect(patternMatch('', 'a?')).toBe(false);
        expect(patternMatch('a', 'a?')).toBe(true);
        expect(patternMatch('aa', 'a?')).toBe(true);
        expect(patternMatch('ab', 'a?')).toBe(false);
        expect(patternMatch('aaa', 'a?')).toBe(false);
        expect(patternMatch('ab', 'a?b?')).toBe(true);
        expect(patternMatch('aabb', 'a?b?')).toBe(true);
        expect(patternMatch('aabbc', 'a?b?')).toBe(false);
    });

    test("should match when pattern is '*' and string has 1 or more of the previous character", () => {
        expect(patternMatch('', 'a*')).toBe(false);
        expect(patternMatch('a', 'a*')).toBe(false);
        expect(patternMatch('aa', 'a*')).toBe(true);
        expect(patternMatch('ab', 'a*')).toBe(false);
        expect(patternMatch('aaa', 'a*')).toBe(true);
        expect(patternMatch('aaab', 'a*')).toBe(false);
        expect(patternMatch('aaab', 'a*b')).toBe(true);
        expect(patternMatch('ab', 'a*b*')).toBe(false);
        expect(patternMatch('aaabbb', 'a*b*')).toBe(true);
        expect(patternMatch('aabbc', 'a*b*')).toBe(false);
    });
});