const {
    bubbleSort,
    insertionSort,
    quickSort,
    mergeSort,
} = require('./exercises.js');

describe('bubbleSort', () => {
    it('sorts a numeric list of positive numbers', () => {
        const numbers = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        const sorted = numbers.sort((a, b) => a - b); // We'll use the built-in sort for comparison

        expect(bubbleSort(numbers)).toEqual(sorted);
    });

    it('can handle negative numbers', () => {
        const numbers = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];

        const sorted = numbers.sort((a, b) => a - b);

        expect(bubbleSort(numbers)).toEqual(sorted);
    });
});

describe('insertionSort', () => {
    it('sorts a numeric list of positive numbers', () => {
        const numbers = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        const sorted = numbers.sort((a, b) => a - b);

        expect(insertionSort(numbers)).toEqual(sorted);
    });

    it('can handle negative numbers', () => {
        const numbers = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];

        const sorted = numbers.sort((a, b) => a - b);

        expect(insertionSort(numbers)).toEqual(sorted);
    });
});

describe('quickSort', () => {
    it('sorts a numeric list of positive numbers', () => {
        const numbers = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        const sorted = numbers.sort((a, b) => a - b);

        expect(quickSort(numbers)).toEqual(sorted);
    });

    it('can handle negative numbers', () => {
        const numbers = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];

        const sorted = numbers.sort((a, b) => a - b);

        expect(quickSort(numbers)).toEqual(sorted);
    });
});

describe('mergeSort', () => {
    it('sorts a numeric list of positive numbers', () => {
        const numbers = [131, 174, 5, 10, 145, 143, 63, 108, 170, 81, 170, 5];
        const sorted = numbers.sort((a, b) => a - b);

        expect(mergeSort(numbers)).toEqual(sorted);
    });

    it('can handle negative numbers', () => {
        const numbers = [192, -41, -119, -143, 88, -63, 81, 140, 87, 11, -63, -19];

        const sorted = numbers.sort((a, b) => a - b);

        expect(mergeSort(numbers)).toEqual(sorted);
    });
});