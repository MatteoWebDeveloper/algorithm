import {
    factorialTrailingZeros
} from "./factorialTrailingZero.js";

describe("factorialTrailingZeros", () => {
    test("it works with small factorial", () => {
        let input = 6;
        let output = factorialTrailingZeros(input);
        let expectedOutput = 1;

        expect(output).toEqual(expectedOutput);
    });

    test("it works with big factorial", () => {
        let input = 105;
        let output = factorialTrailingZeros(input);
        let expectedOutput = 45;

        expect(output).toEqual(expectedOutput);
    });
});