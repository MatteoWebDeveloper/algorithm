import {
    calculateHighestPopulationYearWithSegment,
    calculateHighestPopulationYear
} from "./highestPopulationYear.js";

describe("calculateHighestPopulationYear", () => {
    let population = [{
        birth: 1910,
        death: 1940
    }, {
        birth: 1930,
        death: 1950
    }, {
        birth: 1910,
        death: 1940
    }, {
        birth: 1941,
        death: 1980
    }, {
        birth: 1950,
        death: 1979
    }, {
        birth: 1961,
        death: 2010
    }, {
        birth: 1971,
        death: 2010
    }, {
        birth: 1951,
        death: 1990
    }];

    describe("calculateHighestPopulationYearWithSegment()", () => {
        test("should return the list of years segments with the highest population", () => {
            expect(calculateHighestPopulationYearWithSegment(population)).toEqual([
                [1971, 1979],
            ]);
        })
    });

    describe("calculateHighestPopulationYear()", () => {
        test("should return the list of years segments with the highest population", () => {
            expect(calculateHighestPopulationYear(population)).toEqual([
                [1971, 1979],
            ]);
        })
    });
})