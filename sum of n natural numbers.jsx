function sumOfNaturalNumbers(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sumOfNaturalNumbers(n - 1);
    }
}

const n = 5;
const sum = sumOfNaturalNumbers(n);
console.log('Sum of the first ${n} natural numbers: ${sum}');