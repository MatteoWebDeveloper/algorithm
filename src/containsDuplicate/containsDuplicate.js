function containsDuplicate(nums) {
    let map = {};
    let numsLength = nums.length;

    for (let i = 0; i < numsLength; i++) {
        let currentValue = nums[i]

        if (map[currentValue]) {
            return true;
        }

        map[currentValue] = true;
    }

    return false;
};

export {
    containsDuplicate
}