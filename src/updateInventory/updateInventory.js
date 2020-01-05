function updateInventory(arr1, arr2) {
    let hashMap = {
        // "Bowling Ball": {
        //     index: 1,
        //     unit: 21
        // }
    };

    arr1.forEach((item, index) => {
        let [unit, name] = item;

        if (hashMap[name] === undefined) {
            hashMap[name] = {
                index,
                unit
            };
        }
    });

    arr2.forEach(item => {
        let [unit, name] = item;
        let storedItem = hashMap[name];

        if (storedItem === undefined) {
            arr1.push([unit, name]); // copy of the item
        } else {
            let sum = unit + storedItem.unit;
            arr1[storedItem.index][0] = sum;
        }
    });

    arr1.sort((itemA, itemB) => {
        let nameA = itemA[1];
        let nameB = itemB[1];

        return nameA.localeCompare(nameB);
    });

    // All inventory must be accounted for or you're fired!
    return arr1;
}

export { updateInventory };
