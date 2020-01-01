function calculateHighestPopulationYear(population) {
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

    yearSegments.forEach(({
        count
    }, index) => {
        let highestCount = yearSegments[segmentIndexWithHighestPopulation].count;

        if (count > highestCount) {
            segmentIndexWithHighestPopulation = index;
        }
    });

    let highestPopulationYearSegment = yearSegments[segmentIndexWithHighestPopulation]

    return [highestPopulationYearSegment.start, highestPopulationYearSegment.end];
}

export default calculateHighestPopulationYear;