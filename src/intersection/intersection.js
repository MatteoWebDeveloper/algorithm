function findArrayByLength(listArrays, conditionCallback) {
    let arrayInMemoryMetadataDefault = {
        reference: undefined,
        length: undefined
    };

    const arrayInMemoryMetadata = listArrays.reduce(
        (accumulator, currentItem) => {
            if (
                conditionCallback(accumulator.length, currentItem.length) ||
                accumulator.reference === undefined
            ) {
                return {
                    reference: currentItem,
                    length: currentItem.length
                };
            }

            return accumulator;
        },
        arrayInMemoryMetadataDefault
    );

    return arrayInMemoryMetadata.reference;
}

function intersection(arr1, arr2) {
    const shortestArray = findArrayByLength(
        [arr1, arr2],
        (savedLength, currentLength) => currentLength < savedLength
    );
    const longestArray = findArrayByLength(
        [arr1, arr2],
        (savedLength, currentLength) => currentLength > savedLength
    );

    return shortestArray.filter(value => {
        return longestArray.indexOf(value) !== -1;
    });
}

export {
    intersection
};