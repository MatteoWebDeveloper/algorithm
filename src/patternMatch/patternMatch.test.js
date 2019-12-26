import {
    patternMatch
} from "./patternMatch.js";

describe("patternMatch", () => {
    test("test text match", () => {
        expect(patternMatch("a", "a")).toBe(true);
        expect(patternMatch("aa", "a")).toBe(false);
        expect(patternMatch("ab", "ab")).toBe(true);
    })

    test("test '.' match", () => {
        expect(patternMatch("a", ".")).toBe(true);
        expect(patternMatch("aa", ".")).toBe(false);
        expect(patternMatch("ab", "a.")).toBe(true);
        expect(patternMatch("abc", "a..")).toBe(true);
        expect(patternMatch("abcd", "a..")).toBe(false);
    })

    test("test '?' match", () => {
        expect(patternMatch("", "a?")).toBe(false)
        expect(patternMatch("a", "a?")).toBe(true)
        expect(patternMatch("aa", "a?")).toBe(true)
        expect(patternMatch("ab", "a?")).toBe(false)
        expect(patternMatch("aaa", "a?")).toBe(false)
        expect(patternMatch("ab", "a?b?")).toBe(true)
        expect(patternMatch("aabb", "a?b?")).toBe(true)
        expect(patternMatch("aabbc", "a?b?")).toBe(false)
    })
})