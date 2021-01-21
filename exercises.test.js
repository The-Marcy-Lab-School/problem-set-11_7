const {
    bubbleSort,
    insertionSort,
    quickSort,
    mergeSort,
} = require('./exercises.js');

describe('bubbleSort', () => {
    it('sorts a numeric list of positive numbers', () => {
        const numbersOG = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        const numbers = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        numbers.sort((a, b) => a - b); // We'll use the built-in sort for comparison

        expect(bubbleSort(numbersOG)).toEqual(numbers);
    });

    it('can handle negative numbers', () => {
        const numbersOG = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];
        const numbers = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];
        numbers.sort((a, b) => a - b);

        expect(bubbleSort(numbersOG)).toEqual(numbers);
    });
});

describe('insertionSort', () => {
    it('sorts a numeric list of positive numbers', () => {
        const numbersOG = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        const numbers = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        numbers.sort((a, b) => a - b);

        expect(insertionSort(numbersOG)).toEqual(numbers);
    });

    it('can handle negative numbers', () => {
        const numbersOG = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];
        const numbers = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];
        numbers.sort((a, b) => a - b);

        expect(insertionSort(numbersOG)).toEqual(numbers);
    });
});

describe('quickSort', () => {
    it('sorts a numeric list of positive numbers', () => {
        const numbersOG = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        const numbers = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        numbers.sort((a, b) => a - b);

        expect(quickSort(numbersOG)).toEqual(numbers);
    });

    it('can handle negative numbers', () => {
        const numbersOG = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];
        const numbers = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];
        numbers.sort((a, b) => a - b);

        expect(quickSort(numbersOG)).toEqual(numbers);
    });
});

describe('mergeSort', () => {
    it('sorts a numeric list of positive numbers', () => {
        const numbersOG = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        const numbers = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        numbers.sort((a, b) => a - b);

        expect(mergeSort(numbersOG)).toEqual(numbers);
    });

    it('can handle negative numbers', () => {
        const numbersOG = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];
        const numbers = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];
        numbers.sort((a, b) => a - b);

        expect(mergeSort(numbersOG)).toEqual(numbers);
    });
});
