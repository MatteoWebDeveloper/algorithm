function calculateHighestPopulationYearWithSegment(population) {
    let years = [];

    population.forEach(({
        birth,
        death
    }) => {
        years.push(birth, death)
    })

    years.sort();

    // console.log(years);

    // create year segments
    let yearSegments = [];
    let steps = 2;
    for (let i = 0; i < years.length; i += steps) {
        let start = years[i];
        let end = years[i + 1];

        let segment = {
            start,
            end,
            count: 0
        };

        yearSegments.push(segment);

        // segment in between
        let nextSegmentStart = years[i + steps];
        let doesNextSegmentExist = !!nextSegmentStart;

        if (doesNextSegmentExist && end + 1 < nextSegmentStart) {
            let segmentInBetween = {
                start: end + 1,
                end: nextSegmentStart - 1,
                count: 0
            };

            yearSegments.push(segmentInBetween);
        }
    };

    // console.log(yearSegments);

    // count population
    population.forEach(({
        birth,
        death
    }) => {
        for (let i = 0; i < yearSegments.length; i++) {
            let segment = yearSegments[i];

            // check if person already died at this point in time
            if (death < segment.start) {
                break;
            }

            // check person lived in this segment
            if (birth <= segment.end && death >= segment.start) {
                segment.count++;
            }
        }
    })

    // console.log(yearSegments);

    // find highest count
    let segmentIndexWithHighestPopulation = 0;
    let segmentIndexesWithHighestPopulationList = [];

    yearSegments.forEach(({
        count
    }, index) => {
        let highestCount = yearSegments[segmentIndexWithHighestPopulation].count;

        if (count > highestCount) {
            segmentIndexWithHighestPopulation = index;
            segmentIndexesWithHighestPopulationList = [index];
        }

        if (count === highestCount) {
            segmentIndexesWithHighestPopulationList.push(index);
        }
    });

    return segmentIndexesWithHighestPopulationList.map((indexSegment) => {
        let {
            start,
            end
        } = yearSegments[indexSegment]

        return [start, end]
    });
};

function calculateHighestPopulationYear(population) {
    // create years data structure
    let years = [];
    let yearsDeltasMap = {};

    population.forEach(({
        birth,
        death
    }) => {
        if (yearsDeltasMap[birth] === undefined) {
            yearsDeltasMap[birth] = 1;
            years.push(birth);
        } else {
            yearsDeltasMap[birth]++;
        }

        let yearPersonIsNotAlive = death + 1;

        if (yearsDeltasMap[yearPersonIsNotAlive] === undefined) {
            yearsDeltasMap[yearPersonIsNotAlive] = -1;
            years.push(yearPersonIsNotAlive);
        } else {
            yearsDeltasMap[yearPersonIsNotAlive]--;
        }
    });

    // let sortedYears = [...years].sort(); // immutability its safer but increase operations
    let sortedYears = years.sort();

    // console.log(sortedYears);
    // console.log(yearsDeltasMap);

    // calculate population count
    let populationPeak = {
        count: 0,
        yearsIndex: []
    };

    let populationCount = 0;

    sortedYears.forEach((year, index) => {
        let deltas = yearsDeltasMap[year];

        // change populationCount
        populationCount += deltas;

        // save when it reac a new peak
        if (populationPeak.count < populationCount) {
            populationPeak.count = populationCount;
            populationPeak.yearsIndex = [index];
        } else if (populationPeak.count === populationCount) {
            populationPeak.yearsIndex.push(index);
        }
    });

    return populationPeak.yearsIndex.map(index => {
        let yearStart = sortedYears[index];
        let nextIndexYear = sortedYears[index + 1];

        if (nextIndexYear === undefined) {
            return [yearStart];
        }

        let yearEnd = nextIndexYear - 1;

        return [yearStart, yearEnd];
    });
};

export {
    calculateHighestPopulationYearWithSegment,
    calculateHighestPopulationYear
};