function matchQuestionMark({
    currentChar,
    currentPattern,
    previousPattern
}) {
    let isMatching = false;
    let isValid = false;
    let stringIndexIncrement = 1;
    let patternIndexIncrement = 1;

    // conditions
    let isQuestionMarkPattern = currentPattern === "?";
    let isCharNotMatchingPreviousPattern = currentChar !== previousPattern;
    let isCharMatchingPreviousPattern = currentChar === previousPattern;

    let isZeroPreviousPattern = isQuestionMarkPattern && isCharNotMatchingPreviousPattern;
    let isOnePreviousPattern = isQuestionMarkPattern && isCharMatchingPreviousPattern;

    if (isZeroPreviousPattern) {
        isMatching = true;
        isValid = true;
        stringIndexIncrement = 0;
        patternIndexIncrement = 1;
    }

    if (isOnePreviousPattern) {
        isMatching = true;
        isValid = true;
        stringIndexIncrement = 1;
        patternIndexIncrement = 1;
    }

    return {
        isMatching,
        isValid,
        stringIndexIncrement,
        patternIndexIncrement
    };
}

function matchDot({
    currentChar,
    currentPattern
}) {
    let isMatching = false;
    let isValid = false;
    let stringIndexIncrement = 1;
    let patternIndexIncrement = 1;

    // conditions
    let isDotPattern = currentPattern === ".";
    let isCharacter = typeof currentChar === "string" && currentChar.length === 1;

    if (isDotPattern && isCharacter) {
        isMatching = true;
        isValid = true;
    }

    return {
        isMatching,
        isValid,
        stringIndexIncrement,
        patternIndexIncrement
    };
}

function matchChar({
    currentChar,
    currentPattern
}) {
    let isMatching = false;
    let isValid = false;
    let stringIndexIncrement = 1;
    let patternIndexIncrement = 1;

    if (currentChar === currentPattern) {
        isMatching = true;
        isValid = true;
    }

    return {
        isMatching,
        isValid,
        stringIndexIncrement,
        patternIndexIncrement
    };
}

function noMatch() {
    return {
        isMatching: true,
        isValid: false,
        stringIndexIncrement: 1,
        patternIndexIncrement: 1
    };
}

function patternMatch(string, pattern) {
    let stringList = string.split('');
    let stringIndex = 0;
    let patternList = pattern.split('');
    let patternIndex = 0;
    let validationList = [];

    function recursiveIteration() {
        let currentChar = stringList[stringIndex];
        let currentPattern = patternList[patternIndex];
        let previousPattern = patternList[patternIndex - 1];

        if (currentChar === undefined && currentPattern === undefined) {
            return;
        }

        // matching engine
        let matchers = [matchQuestionMark, matchDot, matchChar, noMatch];

        for (let i = 0; i < matchers.length; i++) {
            let output = matchers[i]({
                currentChar,
                currentPattern,
                previousPattern
            });

            if (output.isMatching) {
                validationList.push(output.isValid);
                stringIndex += output.stringIndexIncrement;
                patternIndex += output.patternIndexIncrement;
                break;
            }
        }

        recursiveIteration();
    }

    recursiveIteration();

    return validationList.every((value) => value);
}

export {
    patternMatch
}