function matchStar({
    currentChar,
    currentPattern,
    previousPattern,
    currentPatternMetadata = {
        charCount: 0
    }
}) {
    let isMatching = false;
    let isValid = false;
    let stringIndexIncrement = 1;
    let patternIndexIncrement = 1;
    let patternMetadata = {
        ...currentPatternMetadata
    };

    // conditions
    let isCharacterMatching = currentChar === previousPattern;

    // increment char counting
    if (isCharacterMatching) {
        patternMetadata.charCount++;
    }

    // matching conditions
    let isStarPattern = currentPattern === '*';
    let isOneMore = patternMetadata.charCount >= 1;

    if (isStarPattern) {
        isMatching = true;
    }

    if (isOneMore) {
        isValid = true;
    }

    // navigation
    if (isOneMore && isCharacterMatching) {
        stringIndexIncrement = 1;
        patternIndexIncrement = 0;
    } else if (isOneMore && !isCharacterMatching) {
        stringIndexIncrement = 0;
        patternIndexIncrement = 1;
    }

    return {
        isMatching,
        isValid,
        stringIndexIncrement,
        patternIndexIncrement,
        patternMetadata
    };
};

function matchQuestionMark({
    currentChar,
    currentPattern,
    previousPattern,
    currentPatternMetadata = {
        charCount: 0
    }
}) {
    let isMatching = false;
    let isValid = false;
    let stringIndexIncrement = 1;
    let patternIndexIncrement = 1;
    let patternMetadata = {
        ...currentPatternMetadata
    };

    // conditions
    let isCharacterMatching = currentChar === previousPattern;

    // increment char counting
    if (isCharacterMatching) {
        patternMetadata.charCount++;
    }

    // matching conditions
    let isQuestionMarkPattern = currentPattern === '?';
    let isZeroOne = patternMetadata.charCount <= 1;

    if (isQuestionMarkPattern) {
        isMatching = true;
    }

    if (isZeroOne) {
        isValid = true;
    }

    // navigation
    if (!isCharacterMatching) {
        stringIndexIncrement = 0;
    }

    return {
        isMatching,
        isValid,
        stringIndexIncrement,
        patternIndexIncrement,
        patternMetadata
    };
};

function matchDot({
    currentChar,
    currentPattern
}) {
    let isMatching = false;
    let isValid = false;
    let stringIndexIncrement = 1;
    let patternIndexIncrement = 1;

    // conditions
    let isDotPattern = currentPattern === '.';
    let isCharacter =
        typeof currentChar === 'string' && currentChar.length === 1;

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
};

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
};

function noMatch() {
    return {
        isMatching: true,
        isValid: false,
        stringIndexIncrement: 1,
        patternIndexIncrement: 1
    };
};

export {
    matchStar,
    matchQuestionMark,
    matchDot,
    matchChar,
    noMatch
};