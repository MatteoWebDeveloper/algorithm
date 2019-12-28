let _0_19 = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fithteen',
    16: 'sixthteen',
    17: 'seventeen',
    18: 'eighthteen',
    19: 'nineteen'
};

let _2X = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fithy',
    6: 'sixthy',
    7: 'seventy',
    8: 'eighty',
    9: 'ninty'
};

let _1XX = {
    1: 'one hundred',
    2: 'two hundred',
    3: 'three hundred',
    4: 'four hundred',
    5: 'five hundred',
    6: 'six hundred',
    7: 'seven hundred',
    8: 'eight hundred',
    9: 'nine hundred'
};
let _1XXX = {
    1: 'one thousand',
    2: 'two thousand',
    3: 'three thousand',
    4: 'four thousand',
    5: 'five thousand',
    6: 'six thousand',
    7: 'seven thousand',
    8: 'eight thousand',
    9: 'nine thousand'
};

let orderVocabolary = [_1XXX, _1XX, _2X, _0_19];
let orderVocabolaryLastIndex = orderVocabolary.length - 1;

function numberToWord(number) {
    let listDigit = number
        .toString()
        .split('')
        .reverse();

    let listWords = [];
    let listDigitLastIndex = listDigit.length - 1;

    let digitIndex = 0;

    function navigate() {
        let word = "";
        let currentDigit = listDigit[digitIndex];
        let vocabolary = orderVocabolary[orderVocabolaryLastIndex - digitIndex];

        // list digit has finished
        if (currentDigit === undefined) {
            return;
        }

        // full number is zero
        if (currentDigit === "0" && listDigitLastIndex === 0) {
            word = vocabolary[currentDigit];
            listWords.push(word);
            digitIndex = listDigitLastIndex + 1;
            return;
        }

        // number 1-19 are single word
        let firstTwoDigit = Number(listDigit[1] + listDigit[0]);
        if (digitIndex === 0 && firstTwoDigit <= 19 && firstTwoDigit >= 1) {
            word = vocabolary[firstTwoDigit];

            listWords.push(word);
            digitIndex = +2;

            navigate();
            return;
        }

        // number > 20
        if (currentDigit === "0") {
            digitIndex++;

            navigate();
            return;
        }

        // number greater than 19 are composable
        word = vocabolary[currentDigit];

        listWords.push(word);

        digitIndex++;

        navigate();
    }

    navigate();

    return listWords.reverse().join(' ').trim();
}

export {
    numberToWord
};