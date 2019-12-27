import {
    matchStar,
    matchQuestionMark,
    matchDot,
    matchChar,
    noMatch
} from "./patternChecks.js";

function patternMatch(string, pattern) {
    let stringList = string.split('');
    let stringIndex = 0;
    let patternList = pattern.split('');
    let patternIndex = 0;
    let validationList = [];
    let patternMetadataList = [];

    function recursiveIteration() {
        let currentChar = stringList[stringIndex];
        let currentPattern = patternList[patternIndex];
        let currentPatternMetadata = patternMetadataList[patternIndex];
        let previousPattern = patternList[patternIndex - 1];

        if (currentChar === undefined && currentPattern === undefined) {
            return;
        }

        // matching engine
        let matchers = [
            matchStar,
            matchQuestionMark,
            matchDot,
            matchChar,
            noMatch
        ];

        for (let i = 0; i < matchers.length; i++) {
            let output = matchers[i]({
                currentChar,
                currentPattern,
                currentPatternMetadata,
                previousPattern
            });

            if (output.isMatching) {
                patternMetadataList[patternIndex] = output.patternMetadata;

                if (output.patternIndexIncrement > 0) {
                    validationList.push(output.isValid);
                }

                stringIndex += output.stringIndexIncrement;
                patternIndex += output.patternIndexIncrement;
                break;
            }
        }

        recursiveIteration();
    }

    recursiveIteration();

    return validationList.every(value => value);
}

export {
    patternMatch
};