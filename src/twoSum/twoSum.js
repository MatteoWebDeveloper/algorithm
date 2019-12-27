function twoSum(arrayNumbers, target) {
    let hashMapNumbers = {};
    let arrayNumbersLength = arrayNumbers.length;

    arrayNumbers.forEach((number, index) => {
        hashMapNumbers[number] = {
            value: number,
            index
        };
    });

    for (let i = 0; i < arrayNumbersLength; i++) {
        let currentNumber = arrayNumbers[i];
        let complementNumber = target - currentNumber;
        let hashMapNumber = hashMapNumbers[complementNumber];

        if (hashMapNumber && hashMapNumber.index !== i) {
            return [currentNumber, complementNumber];
        }
    }

    return null;
};

export {
    twoSum
};