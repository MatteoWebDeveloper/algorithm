function factorial(number) {
    let output = BigInt(1);

    for (let i = 1; i <= number; i++) {
        output *= BigInt(i);
    }

    return output;
}

function factorialTrailingZeros(n) {
    let factorialInput = factorial(n);
    let factorialDigitList = factorialInput.toString().split('');
    let factorialZeroList = factorialDigitList.filter(value => value === '0');

    return factorialZeroList.length;
}

export { factorialTrailingZeros };
