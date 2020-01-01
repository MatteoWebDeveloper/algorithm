import calculateHighestPopulationYear from "./highestPopulationYear.js";

describe("calculateHighestPopulationYear", () => {
    test("should", () => {
        let population = [{
            birth: 1981,
            death: 2020
        }, {
            birth: 1910,
            death: 1940
        }, {
            birth: 1930,
            death: 1950
        }, {
            birth: 1941,
            death: 1980
        }, {
            birth: 1961,
            death: 2010
        }, {
            birth: 1971,
            death: 2014
        }, {
            birth: 1951,
            death: 1990
        }];


        expect(calculateHighestPopulationYear(population)).toEqual([1980, 1981]);
    })
})