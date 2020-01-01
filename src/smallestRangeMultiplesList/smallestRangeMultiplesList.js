/**
 * Complexity: O(a * b * c)
 * if 5 * 4 * 4 = 80 operations
 * 
 * @param {array} lists
 * [
 *     [number, number],
 *     [number, number]
 *     [number, number]
 * ]
 * @returns {array} - [number, number]
 */
function rangeMultiplesListNumbersBruteForce(lists) {
    let range = [];
    let smallesstDifference = Infinity;

    // iterate through each list
    for (let i = 0; i < lists[0].length; i++) {
        let number1 = lists[0][i];

        for (let j = 0; j < lists[1].length; j++) {
            let number2 = lists[1][j];

            for (let k = 0; k < lists[2].length; k++) {
                let number3 = lists[2][k];

                let sequence = [number1, number2, number3];

                let min = Math.min(...sequence);
                let max = Math.max(...sequence);

                let difference = max - min;

                if (smallesstDifference > difference) {
                    range = [min, max];
                    smallesstDifference = difference;
                }
            };
        };
    };

    return range;
};
/* 
 * Complexity O(n)
 * 5 + 4 + 4 - 2 = 11 operations worst case
 *
 **/
function rangeMultiplesListNumbersMinBase(lists) {
    let range = [];
    let smallesstDifference = Infinity;

    let listsMaxNumber = lists.map(list => Math.max(...list));

    function findGreaterCloserNumber(number, list) {
        return list.find(listNumber => number < listNumber);
    }

    lists.forEach((list, index) => {
        let indexesAvailable = [0, 1, 2].filter(indexAvailable => indexAvailable !== index);

        let secondListIndex = indexesAvailable.pop();
        let secondList = lists[secondListIndex];
        let secondListMax = listsMaxNumber[secondListIndex];

        let thirdListIndex = indexesAvailable.pop();
        let thirdList = lists[thirdListIndex];
        let thirdListMax = listsMaxNumber[thirdListIndex];

        for (let i = 0; i < list.length; i++) {
            let selectMinNumber = list[i];

            // if there are no numbers bigger than min number, move to next iteration
            if (selectMinNumber > Math.min(secondListMax, thirdListMax)) {
                continue;
            }

            let selectSecondNumber = findGreaterCloserNumber(selectMinNumber, secondList);
            let selectThirdNumber = findGreaterCloserNumber(selectMinNumber, thirdList);
            let sequence = [selectMinNumber, selectSecondNumber, selectThirdNumber];

            let maxNumber = Math.max(...sequence);

            let difference = maxNumber - selectMinNumber;

            if (smallesstDifference > difference) {
                range = [selectMinNumber, maxNumber];
                smallesstDifference = difference;
            }
        }

    });

    return range;
};

export {
    rangeMultiplesListNumbersBruteForce,
    rangeMultiplesListNumbersMinBase
}