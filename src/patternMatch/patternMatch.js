function findIsDotMatch(patternToken, char) {
    let condition = patternToken === "." && typeof char === undefined;

    return condition;
}

function patternMatch(string, pattern) {
    let stringList = string.split("");
    let patternList = pattern.split("");
    // let AST
    let stringValidation = [];

    let stringListPointer = 0;
    patternList.forEach((patternToken) => {
        let currentChar = stringList[stringListPointer];

        // text match
        if (currentChar === patternToken) {
            stringValidation.push(true);
            stringListPointer++;
            return;
        }

        // . match
        let isDotMatch = findIsDotMatch(patternToken, currentChar);
        if (isDotMatch) {
            stringValidation.push(true);
            stringListPointer++;
            return;
        }

        // ? match
        // if () {
        //     stringValidation.push(true);
        //     return;
        // }

        stringListPointer++;
        stringValidation.push(false);
    });

    let isValidStringListValidation = stringValidation.every((isCharValid) => isCharValid);
    //let didValidateEverything = stringValidation.length <;

    return isValidStringListValidation;
}

export {
    patternMatch
}