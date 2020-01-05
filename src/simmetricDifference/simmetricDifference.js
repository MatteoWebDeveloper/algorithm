function symmetricDifferenceTwoValues(firstValue, secondValue) {
    let args = [firstValue, secondValue];
    let symDifference = [];
    let hashMap = {};

    //   {
    //     3: {
    //       origin: [1,1,2]
    //     }
    //   }
    args.forEach((list, index) => {
        list.forEach(number => {
            if (hashMap[number] === undefined) {
                hashMap[number] = {
                    origin: [index]
                };
            } else {
                hashMap[number].origin.push(index);
            }
        });
    });

    let allNumber = Object.keys(hashMap);

    allNumber.forEach(number => {
        let integer = Number(number);
        let numberObject = hashMap[number];
        let firstNumberOrigin = numberObject.origin[0];

        if (numberObject.origin.every(origin => origin === firstNumberOrigin)) {
            symDifference.push(integer);
        }
    });

    return symDifference;
}

function simmetricDifference(...args) {
    let copyArgs = [...args];

    function recursive(listList, firstList) {
        if (firstList === undefined) {
            firstList = listList.shift();
        }

        let secondList = listList.shift();

        let symmetricDifferenceOutput = symmetricDifferenceTwoValues(
            firstList,
            secondList
        );

        if (listList.length === 0) {
            return symmetricDifferenceOutput;
        }

        return recursive(listList, symmetricDifferenceOutput);
    }

    return recursive(copyArgs);
}

export { simmetricDifference };
